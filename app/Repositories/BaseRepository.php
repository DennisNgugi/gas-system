<?php
namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Interfaces\BaseRepositoryInterface;

class BaseRepository implements BaseRepositoryInterface{
    protected $model;

    //constructor

    public function __construct(Model $model){
        $this->model = $model;
    }

    public function create(array $attributes): Model
    {
        return $this->model->create($attributes);
    }

    public function update(array $attributes, $id)
    {
        $record = $this->findIndex($id);
        return $record->update($attributes);
    }

    public function findIndex($id)
    {
        return $this->model->find($id);
    }
    public function all(){
        return $this->model->cursor();
    }
    public function paginateAll(){
        return $this->model->paginate(15);
    }

     // remove record from the database
     public function delete($id)
     {
       $record = $this->findIndex($id);
        return $record->destroy($id);
     }

      // Eager load database relationships
    public function withRelation(array $relations = array())
    {
        return $this->model->with($relations)->orderBy('id','desc')->get();
    }
    // Eager load database relationships paginated
   public function withRelationPaginated(array $relations = array())
   {
       return $this->model->with($relations)->orderBy('id','desc')->paginate(15);
   }

}
