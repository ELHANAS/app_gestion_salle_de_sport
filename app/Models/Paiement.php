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
            ->select('paiements.*','disciplines.libelle','membres.name','abonnements.duree')
            ->get();
        return $paiement ;
    }
}
