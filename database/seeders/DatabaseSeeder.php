<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

         User::factory()->create([
            'name' => 'ANAS EL HANDOUZ',
            'email' => 'anaselhandouz@gmail.com',
             'fonction' => 'Admin',
             'salaire'=>000000,
             'password' => Hash::make("anaselhandouz"),
             'cin' => "F2737233"
        ]);
    }
}
