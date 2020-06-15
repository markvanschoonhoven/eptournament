<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
	public $timestamps = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'matchduration', 'intermission', 'points_win', 'points_draw', 'points_loss'
    ];

    //protected $guarded = [];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function referee()
    {
        return $this->belongsToMany('App\Referee');
    }
}