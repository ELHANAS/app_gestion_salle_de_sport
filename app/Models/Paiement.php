<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Paiement extends Model
{
    use HasFactory;
    protected $fillable = [
        'idAbonnement',
        'datePaiement',
        'montantPaye',
        'montantRestant',
    ];

    public  static  function getPaiement(){
        $paiement =DB::table('paiements')
            ->join('abonnements', 'abonnements.codeA', '=', 'paiements.idAbonnement')
            ->join('disciplines', 'disciplines.codeD', '=', 'abonnements.idDiscipline')
            ->join('membres', 'membres.id', '=', 'abonnements.idMembre')
            ->select('paiements.*','disciplines.*','membres.name','abonnements.duree')
            ->get();
        return $paiement ;
    }


    public  static  function  getPaiementParMonth($month){

        $paiements = [] ;
        $paiement =DB::select('CALL getPaiementParMonth( ?)', [$month]) ;
        $daysInMonths = cal_days_in_month(CAL_GREGORIAN, $month, 2023);
        $days = [] ;
        foreach ( $paiement as $p){
            array_push($days , $p->day) ;
        }

        for ($i = 1; $i <=  $daysInMonths ; $i++) {
            if(in_array($i,$days)){
            foreach ( $paiement as $p){
                if($i === $p->day){
                    array_push($paiements,$p) ;
                    break ;
                }
            }
        }else{
            array_push($paiements,['day'=> $i,'sum'=> 0]) ;
        }
        }


        return $paiements ;
    }

    public  static  function  getPaiementParYear($year){
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
        $paiements = [] ;
        $paiement =DB::select('CALL getPaiementParYear( ?)', [$year]) ;
         $month = [] ;
        foreach ( $paiement as $p){
            array_push($month , $p->month) ;
        }

    foreach ($mois as $key => $value){
        if(in_array($key,$month)){
            foreach ( $paiement as $p){
                if($key === $p->month){
                    $p->month = $value ;
                    array_push($paiements,$p) ;
                    break ;
                }
            }
        }else{
            array_push($paiements,['month'=> $value,'sum'=> 0]) ;
        }
    }

        return $paiements ;
    }
}
