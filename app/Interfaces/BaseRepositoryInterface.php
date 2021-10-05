<?php
namespace App\Interfaces;

use Illuminate\Database\Eloquent\Model;
/*
This interface will be a parent interface that stores methods that are common in every repository

*/
interface BaseRepositoryInterface{
    // upload to DB method
    public function create(array $attributes): Model;

    public function all();

    public function findIndex($id);

    public function update(array $attributes, $id);

    public function delete($id);

    public function withRelation(array $relations = array());

public function withRelationPaginated(array $relations = array());
}
