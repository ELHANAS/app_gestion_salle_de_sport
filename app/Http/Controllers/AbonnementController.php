<?php

namespace App\Http\Controllers;

use App\Models\Abonnement;
use App\Models\Membre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AbonnementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return [ "Abonnement" => Abonnement::getAbonnement()] ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $abonnement = new Abonnement() ;
        $abonnement->duree = $request->duree ;
        $abonnement->idDiscipline = $request->idDiscipline ;
        $abonnement->idMembre = $request->idMembre ;
        $abonnement->dateCreationA = $request->dateCreationA ;
        $abonnement->save();
        return "saved" ;
    }

    /**
     * Display the specified resource.
     */
    public function show(Abonnement $abonnement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Abonnement $abonnement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Abonnement $abonnement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Abonnement $abonnement)
    {
        //
    }

public  function  getAbonnementParId($id){
        $abn = Abonnement::getAbonnementParId($id);
        return $abn ;
}
    public function abonnementParParticipant(string $id){
        $idA = intval($id) ;
        $abonnemets =  DB::table('abonnements')
            ->select('*')
            ->where('idMembre', $idA)
            ->get();
        return $abonnemets ;
    }
    public  function getPaiements($id){
        Abonnement::changeEtat();
        $paiements = Abonnement::getPaiements($id) ;
        $abonnement = Abonnement::getAbonnementParId($id) ;
        return ['paiements' => $paiements ,
                'abonnements' => $abonnement ];
    }
}
