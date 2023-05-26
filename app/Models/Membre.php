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


}
