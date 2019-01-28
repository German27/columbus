<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'genre_id'];

    public function products(){
      return $this->hasMany(Product::class);
    }
    
    public function genres(){
      return $this->belongsToMany(Genre::class);
    }
}
