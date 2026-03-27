<?php 
namespace App\Models;

use Clicalmani\Foundation\Acme\Model;

class User extends Model
{
    /**
     * Model database table 
     *
     * @var string $table Table name
     */
    protected $table = "users u";

    /**
     * Model entity
     * 
     * @var string
     */
    protected string $entity = \Database\Entities\UserEntity::class;

    /**
     * Table primary key(s)
     * Use an array if the key is composed with more than one attributes.
     *
     * @var string|array $primary_keys Table primary key.
     */
    protected $primaryKey = "u.id";

    protected $hidden = ['password', 'login_count', 'state'];

    protected $custom = ['role', 'hash'];

    /**
     * Constructor 
     *
     * @param mixed $id
     */
    public function __construct(mixed $id = null)
    {
        parent::__construct($id);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function getRoleAttribute()
    {
        return 'admin';
    }

    public function getHashAttribute()
    {
        return create_parameters_hash(['profile' => $this->id]);
    }
}
