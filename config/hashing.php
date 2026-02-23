<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Pre-Hashing Method
    |--------------------------------------------------------------------------
    |
    | This option controls the default pre-hash method that will be used to hash
    | passwords for your application. By default, the sha1 algorithm is
    | used; however, you remain free to modify this option if you wish.
    |
    | @see https://www.php.net/manual/en/function.hash-hmac-algos.php for supported
    | algorithms
    |
    */

    'algo' => 'sha256',

    'cipher' => 'AES-256-CBC',

    'iv_length' => 16, // encrypt method AES-256-CBC expects 16 bytes - otherwise you will get a warning

    /*
    |--------------------------------------------------------------------------
    | Default URL Hash Length
    |--------------------------------------------------------------------------
    |
    | URL hash may be used to prevent route tempering.
    |
    | This option controls the default length that will be used to
    | create URL hash. By default, 10 is used; however, you remain free to 
    | modify this option if you wish. You may specify 0 if you do not wish
    | to truncate the generated hash.
    |
    */

    'hash_length' => 10,

    'hash_parameter' => 'hash',

    /*
    |--------------------------------------------------------------------------
    | Default Hash Driver
    |--------------------------------------------------------------------------
    |
    | This option controls the default hash driver that will be used to hash
    | passwords for your application. By default, the bcrypt algorithm is
    | used; however, you remain free to modify this option if you wish.
    |
    | Supported: "bcrypt", "argon", "argon2id"
    |
    */

    'driver' => 'bcrypt',

    /*
    |--------------------------------------------------------------------------
    | Bcrypt Options
    |--------------------------------------------------------------------------
    |
    | Here you may specify the configuration options that should be used when
    | passwords are hashed using the Bcrypt algorithm. This will allow you
    | to control the amount of time it takes to hash the given password.
    |
    */

    'bcrypt' => [
        'cost' => env('BCRYPT_COST', 10),
    ],

    /*
    |--------------------------------------------------------------------------
    | Argon Options
    |--------------------------------------------------------------------------
    |
    | Here you may specify the configuration options that should be used when
    | passwords are hashed using the Argon algorithm. These will allow you
    | to control the amount of time it takes to hash the given password.
    |
    */

    'argon' => [
        '2i' => true,
        'memory' => 65536,
        'threads' => 1,
        'time' => 4,
    ],

];
