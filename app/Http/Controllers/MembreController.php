<?php

namespace App\Http\Controllers;

use App\Models\Membre;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MembreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Membre::changeEtat();
        return [ "membre" => Membre::getMembers()] ;
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
        $membre = new Membre() ;
        $membre->name = $request->name ;
        $membre->email = $request->email ;
        $membre->tel = $request->tel ;
        $membre->dateNss = $request->dateNss ;

        if($request->has("image")){
            $image = $request->file('image') ;
            $name = $request->name.time()."." . $image->extension() ;
            $image->move("users" , $name);
            $membre->photo =$name ;
        }
        $membre->save() ;
        return "registre est terminé avec succes"  ;
    }

    /**
     * Display the specified resource.
     */
    public function show(Membre $membre)
    {
        return $membre ;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Membre $membre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Membre $membre)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Membre $membre)
    {
        //
    }
    public  function  getAbonnement($id){
        $abonnements = Membre::getAbonnement($id) ;
        $participant = Membre::find($id) ;
        return ['abonnements' => $abonnements,
                'participant' => $participant   ]    ;
    }

    public  function  search(Request $request){
        $participants = DB::table('membres')
                            ->where('name','like','%'.$request->search.'%' )
                            ->select('*')
                            ->limit(20)
                            ->get();
        return $participants ;
    }
    public  function  destroyNotification(Notification $notification){
        $notification->delete();
        return 'notification à était suprimmer avec succés';
    }
}
