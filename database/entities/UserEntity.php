<?php
namespace Database\Entities;

use Clicalmani\Database\DataTypes\Char;
use Clicalmani\Database\DataTypes\Enum;
use Clicalmani\Database\DataTypes\Integer;
use Clicalmani\Database\DataTypes\TinyInt;
use Clicalmani\Database\DataTypes\VarChar;
use Clicalmani\Database\Factory\Entity;
use Clicalmani\Database\Factory\PrimaryKey;
use Clicalmani\Database\Factory\Property;
use Clicalmani\Database\Factory\Validate;

class UserEntity extends Entity
{
    #[Property(
        length: 10,
        unsigned: true,
        nullable: false,
        autoIncrement: true
    ), PrimaryKey]
    public Integer $id;

    #[Property(
        length: 191
    )]
    public ?VarChar $given_name;
    
    #[Property(
        length: 191
    )]
    public ?VarChar $family_name;

    #[Property(
        length: 200
    )]
    public ?VarChar $email;

    #[Property(
        length: 10
    )]
    public ?Char $phone;

    #[Property(
        values: ['male', 'femail']
    )]
    public Enum|string|null $gender = 'male';

    #[Property(
        length: 191
    ), Validate('required|password|hash|min:8')]
    public VarChar $password;

    #[Property(
        values: ['lock', 'unlock']
    )]
    public Enum|string $state = 'lock';

    #[Property(
        length: 3,
        unsigned: true
    )]
    public TinyInt|int $login_count = 0;
}
