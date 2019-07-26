<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Contracts\RepositoryInterface;
use Illuminate\Container\Container as App;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Repository
 *
 * Source: https://bosnadev.com/2015/03/07/using-repository-pattern-in-laravel-5/
 */
abstract class Repository implements RepositoryInterface
{
    /**
     * @var App
     */
    private $app;
 
    /**
     * Model instance.
     * 
     * @var
     */
    protected $model;
 
    /**
     * @param App $app
     * 
     * @throws \Bosnadev\Repositories\Exceptions\RepositoryException
     */
    public function __construct() 
    {
        $this->app = app();
        $this->makeModel();
    }
 
    /**
     * Specify Model class name
     * 
     * @return mixed
     */
    abstract function model();
 
    /**
     * @return Model
     * @throws RepositoryException
     */
    public function makeModel() 
    {
        $model = $this->app->make($this->model());
 
        if (!$model instanceof Model)
            die('Error repository model.');
            // throw new RepositoryException("Class {$this->model()} must be an instance of Illuminate\\Database\\Eloquent\\Model");
 
        return $this->model = $model;
    }

    /**
     * @param array $columns
     * 
     * @return mixed
     */
    public function all($columns = array('*')) 
    {
        return $this->model->get($columns);
    }
 
    /**
     * @param int $perPage
     * @param array $columns
     * 
     * @return mixed
     */
    public function paginate($perPage = 15, $columns = array('*')) 
    {
        return $this->model->paginate($perPage, $columns);
    }
 
    /**
     * @param array $data
     * 
     * @return mixed
     */
    public function create(array $data) 
    {
        return $this->model->create($data);
    }
 
    /**
     * @param array $data
     * @param $id
     * @param string $attribute
     * 
     * @return mixed
     */
    public function update(array $data, $id, $attribute="id") 
    {
        return $this->model->where($attribute, '=', $id)->update($data);
    }
 
    /**
     * @param $id
     * 
     * @return mixed
     */
    public function delete($id) 
    {
        return $this->model->destroy($id);
    }
 
    /**
     * @param $id
     * @param array $columns
     * 
     * @return mixed
     */
    public function find($id, $columns = array('*')) 
    {
        return $this->model->find($id, $columns);
    }
 
    /**
     * @param $attribute
     * @param $value
     * @param array $columns
     * 
     * @return mixed
     */
    public function findBy($attribute, $value, $columns = array('*')) 
    {
        return $this->model->where($attribute, '=', $value)->first($columns);
    }
}