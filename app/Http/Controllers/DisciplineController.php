<?php

namespace App\Http\Controllers;

use App\Models\Discipline;
use Illuminate\Http\Request;

class DisciplineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ["discipline" => Discipline::all()] ;
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
        $discipline = new Discipline() ;
        $discipline->libelle = $request->libelle ;
        $discipline->prix = $request->prix ;
        $discipline->save();
        return "saved" ;
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $entraineur = Discipline::getEntrainuers($id) ;


        return ['entraineurs' => $entraineur] ;

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Discipline $discipline)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Discipline $discipline)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Discipline $discipline)
    {
        //
    }
}
