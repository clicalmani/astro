<?php 
namespace App\Models;

use Clicalmani\Foundation\Acme\Model;

/**
 * Class User
 *
 * Model representing user accounts, handling authorization roles, parameter hashes,
 * and mapping to the underlying users database entity.
 *
 * @package App\Models
 * @author Clicalmani
 */
class User extends Model
{
    /**
     * Associated database table name with default alias.
     *
     * @var string Table name
     */
    protected string $table = "users AS u";

    /**
     * Fully qualified class name of the associated entity.
     * 
     * @var string Entity class
     */
    protected string $entity = \Database\Entities\UserEntity::class;

    /**
     * Primary key(s) for the table.
     *
     * @var string|array Primary key attribute name or composite keys array
     */
    protected string|array $primaryKey = "id";

    /**
     * Attributes hidden from array or JSON serialized representations.
     * 
     * @var array
     */
    protected array $hidden = ['password', 'login_count', 'state'];

    /**
     * User model constructor.
     *
     * @param mixed $id Optional primary key value to load model record
     */
    public function __construct(mixed $id = null)
    {
        parent::__construct($id);
    }

    /**
     * Retrieve the authorization role assigned to the user.
     * 
     * @return string User role identifier
     */
    public function role(): string
    {
        return 'admin';
    }

    /**
     * Generate a parameter hash representing the user profile instance.
     * 
     * @return string Hashed parameters payload
     */
    public function hash(): string
    {
        return create_parameters_hash(['profile' => $this->id]);
    }
}