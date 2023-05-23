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



}
