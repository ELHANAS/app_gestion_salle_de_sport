<?php

namespace App\Http\Controllers;

use App\Models\Abonnement;
use App\Models\Discipline;
use App\Models\Membre;
use App\Models\Notification;
use App\Models\Paiement;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Abonnement::changeEtat();
        return ["user"=>User::all() ];                 ;
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
    public function show(User $user)
    {
        return $user ;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }
    public  function  updateImage(Request  $request,User $user){

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
    public function getNumberUsers(){
        return[
            'users' => count(User::all()),
            'participant' => count(Membre::all()) ,
            'membresActif' => count( Membre::getMembresActif()),
            'membresNoActif' =>count(Membre::getMembresNoActif()),
            'membresNouvau' =>count(Membre::getMembresNouveau() ),
            "abonnementPaye" => count(Abonnement::abonnementPaye()),
            "abonnementNonPaye" => count(Abonnement::abonnementNonPaye()),
            "abonnementEncours" => count(Abonnement::abonnementEncours())
        ]  ;
    }

    public  function  search(Request $request){
        $users = DB::table('users')
            ->where('name','like','%'.$request->search.'%' )
            ->select('*')
            ->limit(20)
            ->get();
        return $users ;
    }
}
