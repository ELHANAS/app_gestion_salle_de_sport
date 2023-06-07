<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Abonnement extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'tel',
        'dateNss',
        'photo'
    ];

    public  static  function getAbonnement(){
        $abonnements =  DB::table('abonnements')
            ->join('membres', 'membres.id', '=', 'abonnements.idMembre')
            ->join('disciplines', 'disciplines.codeD', '=', 'abonnements.idDiscipline')
            ->select('abonnements.*','disciplines.*','membres.*')
            ->orderBy('abonnements.codeA','DESC')
            ->limit(20)
            ->get();
        return $abonnements ;
    }
    public  static  function getAbonnementParId($id){
        $abonnements =  DB::table('abonnements')
            ->join('membres', 'membres.id', '=', 'abonnements.idMembre')
            ->join('disciplines', 'disciplines.codeD', '=', 'abonnements.idDiscipline')
            ->select('abonnements.*','disciplines.*','membres.name')
            ->where('abonnements.codeA',$id)
            ->get();
        return $abonnements ;
    }

    public  static  function  changeEtat(){
        $abonnements = Abonnement::all();
        foreach ($abonnements as $abonnement){
            DB::select('CALL changeEtatAbonnement( ?)', [$abonnement->codeA]);
        }
}

public static  function  getPaiements($id){
        $paiement =   DB::table('paiements')
            ->join('abonnements', 'abonnements.codeA', '=', 'paiements.idAbonnement')
            ->join('disciplines', 'disciplines.codeD', '=', 'abonnements.idDiscipline')
            ->join('membres', 'membres.id', '=', 'abonnements.idMembre')
            ->select('paiements.*','disciplines.*','membres.name','abonnements.duree')
            ->where('paiements.idAbonnement',$id)
            ->get();

        return $paiement ;
}
}
