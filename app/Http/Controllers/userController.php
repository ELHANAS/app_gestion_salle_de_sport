<?php

namespace App\Http\Controllers;

use App\Models\Abonnement;
use App\Models\Discipline;
use App\Models\Membre;
use App\Models\Paiement;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Abonnement::changeEtat();
        return ["user"=>User::all() ,
                "membre" => Membre::all(),
                "Abonnement" => Abonnement::getAbonnement(),
                    "discipline" => Discipline::all(),
                        "paiement" => Paiement::getPaiement()] ;
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

        $user = new User() ;
        $user->name = $request->name ;
        $user->email = $request->email ;
        $user->salaire = $request->salaire;
        $user->cin = $request->cin ;
        if($request->tel){
            $user->tel = $request->tel ;
        }else{
            $user->tel = "aucun numéro";
        }

        $user->fonction = $request->fonction ;
        $user->password =Hash::make($request->password)  ;

        if($request->has("photo")){
            $image = $request->file('photo') ;
            $name = $request->name.time()."." . $image->extension() ;
            $image->move("users" , $name);
            $user->photo =$name ;
        }
        $user->save() ;
        return "registre est terminé avec succes"  ;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id) ;
        return $user ;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }
    public  function  updateImage(Request  $request,$id){
        $user = User::find($id) ;
        if($request->has("photo")){
            $image = $request->file('photo') ;
            $name = $request->name.time()."." . $image->extension() ;
            $image->move("users" , $name);
            $user->photo =$name ;
        }
        $user->save() ;
        return "image a enregister" ;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public  function getUser(){
        $user = ["user" => Auth::user()] ;

        return  $user;
    }
}
