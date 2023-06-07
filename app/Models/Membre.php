<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Membre extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'tel',
        'dateNss',
        'photo'
    ];
public static  function  getAbonnement($id){
    $abonnements =  DB::table('abonnements')
        ->join('membres', 'membres.id', '=', 'abonnements.idMembre')
        ->join('disciplines', 'disciplines.codeD', '=', 'abonnements.idDiscipline')
        ->select('abonnements.*','disciplines.*','membres.name')
        ->where('abonnements.idMembre',$id)
        ->get();
    return $abonnements ;
}

public  static  function  getMembers(){
    $memebres = DB::table('membres')
                ->orderBy('id', 'desc')
                ->select('*')
            ->limit(20)
        ->get();
    return $memebres ;
}
    public  static  function  getMembreParMois($month){

        $membres = [] ;
        $membre =DB::select('CALL getMembreParMois( ?)', [$month]) ;
        $daysInMonths = cal_days_in_month(CAL_GREGORIAN, $month, 2023);
        $days = [] ;
        foreach ( $membre as $m){
            array_push($days , $m->day) ;
        }

        for ($i = 1; $i <=  $daysInMonths ; $i++) {
            if(in_array($i,$days)){
                foreach ( $membre as $m){
                    if($i === $m->day){
                        array_push($membres,$m) ;
                        break ;
                    }
                }
            }else{
                array_push($membres,['day'=> $i,'sum'=> 0]) ;
            }
        }


        return $membres ;
    }

    public  static  function  getMembreParYear($year){
        $mois = array(
            1 => "Janvier",
            2 => "Février",
            3 => "Mars",
            4 => "Avril",
            5 => "Mai",
            6 => "Juin",
            7 => "Juillet",
            8 => "Août",
            9 => "Septembre",
            10 => "Octobre",
            11 => "Novembre",
            12 => "Décembre"
        );
        $membres = [] ;
        $membre =DB::select('CALL getMembreParYear( ?)', [$year]) ;
        $month = [] ;
        foreach ( $membre as $p){
            array_push($month , $p->month) ;
        }

        foreach ($mois as $key => $value){
            if(in_array($key,$month)){
                foreach ( $membre as $p){
                    if($key === $p->month){
                        $p->month = $value ;
                        array_push($membres,$p) ;
                        break ;
                    }
                }
            }else{
                array_push($membres,['month'=> $value,'sum'=> 0]) ;
            }
        }

        return $membres ;
    }
    public  static  function  changeEtat(){
    $membres  = Membre::all() ;
    foreach ($membres as $membre){
        DB::select('CALL changeEtatMembre( ?)', [$membre->id]);

    }
    }
}
