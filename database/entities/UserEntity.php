<?php
namespace Database\Entities;

use Clicalmani\Database\DataTypes\Char;
use Clicalmani\Database\DataTypes\Date;
use Clicalmani\Database\DataTypes\Enum;
use Clicalmani\Database\DataTypes\Integer;
use Clicalmani\Database\DataTypes\TinyInt;
use Clicalmani\Database\DataTypes\VarChar;
use Clicalmani\Database\Factory\Entity;
use Clicalmani\Database\Factory\Index;
use Clicalmani\Database\Factory\PrimaryKey;
use Clicalmani\Database\Factory\Property;

#[Index(
    name: 'userUNIQUE',
    key: 'username',
    unique: true
), Index(
    name: 'phoneUNIQUE',
    key: 'phone',
    unique: true
), Index(
    name: 'emailUNIQUE',
    key: 'email',
    unique: true
)]
class UserEntity extends Entity
{
    #[Property(
        length: 10,
        unsigned: true,
        autoIncrement: true
    ), PrimaryKey]
    public Integer $id; 

    #[Property(
        length: 255
    )]
    public VarChar $username;

    #[Property(
        length: 255
    )]
    public VarChar $first_name;

    #[Property(
        length: 255
    )]
    public VarChar $last_name;

    #[Property(
        length: 10
    )]
    public ?Char $phone;

    #[Property(
        length: 191
    )]
    public VarChar $email;

    #[Property()]
    public ?Date $birth_day;

    #[Property(
        values: ['male', 'female']
    )]
    public Enum|string $gender = 'male';

    #[Property(
        length: 3,
        unsigned: true
    )]
    public TinyInt|int $max_loans_allowed = 5;

    #[Property(
        length: 100
    )]
    public VarChar $password;
}
