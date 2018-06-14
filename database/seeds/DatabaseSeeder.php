<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

         

         for ($i=0; $i <100 ; $i++) 
         { 

         	$this->call(CustomerTableSeeder::class);

         	
         }
    }
}
