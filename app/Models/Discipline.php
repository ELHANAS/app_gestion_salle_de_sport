<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Discipline extends Model
{
    use HasFactory;
protected $table = "disciplines" ;
    protected $fillable = [
        'libelle',
        'prix',

    ];

    public static function getEntrainuers($id){
        $entreneurs = DB::table('disciplin_employe')
            ->join('users', 'users.id', '=', 'disciplin_employe.employe')
            ->join('disciplines', 'disciplines.codeD', '=', 'disciplin_employe.discipline')
            ->select('users.*')
            ->where('disciplin_employe.discipline',$id)
            ->get();
        return $entreneurs ;
    }
    public static  function getDisciplinesParticipant(){
     $participant = DB::table('disciplines')
                ->join('abonnements' ,'disciplines.codeD','=','abonnements.idDiscipline' )
                 ->selectRaw('disciplines.*, COUNT( DISTINCT abonnements.idMembre) as count')
                ->groupBy('disciplines.codeD')
                ->get();
     return $participant ;
    }
}
