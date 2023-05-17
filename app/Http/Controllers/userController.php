<?php

namespace App\Http\Controllers;

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
        return User::all() ;
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
    public function store()
    {

        $credentials = request(['name','email', 'password','cin','salaire','fonction']);
        $credentials['password'] = bcrypt($credentials['password']);


        User::create($credentials);
        return "registre est terminé avec succes" ;

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
