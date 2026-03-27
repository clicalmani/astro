<?php 
namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Clicalmani\Database\Factory\Priority;
use Clicalmani\Database\Seeders\Seeder;
use Clicalmani\Database\Traits\PreventEventsCapturing;

#[Priority(2)]
class UserSeeder extends Seeder 
{
    use PreventEventsCapturing;

    /**
     * Run the seeder 
     *
     * @return void
     */
    public function run() : void
    {
        $user = new User;
        $user->email = 'test@example.com';
        $user->password = 'passme';
        $user->save();
    }
}
