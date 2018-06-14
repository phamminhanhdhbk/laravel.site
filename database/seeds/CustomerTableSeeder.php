<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customers')->insert(
        	
        [
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            
        ]

    );
    }
}
