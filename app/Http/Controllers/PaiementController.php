<?php

namespace App\Http\Controllers;

use App\Models\Abonnement;
use App\Models\Membre;
use App\Models\Paiement;
use Illuminate\Http\Request;

class PaiementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return [ "paiement" => Paiement::getPaiement()] ;
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
        $paiement =new Paiement();
        $paiement->idAbonnement = $request->idAbonnement ;
        $paiement->datePaiement = $request->datePaiement ;
        $paiement->montantPaye = $request->montantPaye ;
        $paiement->montantRestant = $request->montantRestant ;
        $paiement->save() ;
        Abonnement::changeEtat();
return "saved" ;

    }
public  function  getPaiementParYear($year){
    $paiement = Paiement::getPaiementParYear($year);
    $membres = Membre::getMembreParYear($year);
    return ['paiements'=> $paiement , "membres"=> $membres] ;
}

function  getPaiementParMonth($month){
        $paiements = Paiement::getPaiementParMonth($month);
    $membres = Membre::getMembreParMois($month) ;
        return ['paiements' => $paiements , 'membres' => $membres] ;
}
    /**
     * Display the specified resource.
     */
    public function show(Paiement $paiement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Paiement $paiement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Paiement $paiement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Paiement $paiement)
    {
        //
    }
}
