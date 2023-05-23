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
            ->select('abonnements.*','disciplines.libelle','membres.name')
            ->get();
        return $abonnements ;
    }
public  static  function  changeEtat(){
        $abonnements = Abonnement::all();
        foreach ($abonnements as $abonnement){
            DB::select('CALL changeEtatAbonnement( ?)', [$abonnement->codeA]);
        }
}
}
