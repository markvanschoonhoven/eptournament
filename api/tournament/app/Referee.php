<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Referee extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'name'
    // ];
    // Maximale rechten update en insert
    protected $guarded = [];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function tournament()
    {
        return $this->belongsToMany('App\Tournament');
    }

}
