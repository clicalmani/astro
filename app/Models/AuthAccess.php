<?php 
namespace App\Models;

use Clicalmani\Foundation\Acme\Model;

/**
 * Class AuthAccess
 *
 * Represents the AuthAccess database model and entity mapping for managing
 * user authentication tokens and access records.
 *
 * @package App\Models
 * @author Clicalmani
 */
class AuthAccess extends Model
{
    /**
     * Associated database table name with default alias.
     *
     * @var string Table name
     */
    protected string $table = "auth_access AS a";

    /**
     * Fully qualified class name of the associated entity.
     * 
     * @var string Entity class
     */
    protected string $entity = \Database\Entities\AuthAccessEntity::class;

    /**
     * Primary key(s) for the table.
     *
     * @var string|array Primary key attribute name or composite keys array
     */
    protected string|array $primaryKey = "id";

    /**
     * AuthAccess constructor.
     *
     * @param mixed $id Optional primary key value to load model record
     */
    public function __construct(mixed $id = null)
    {
        parent::__construct($id);
    }
}