<?php

namespace App\Models;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TicketType extends Model
{
    use HasFactory, SoftDeletes, Multitenantable;

    protected $with = ['company'];

    protected $fillable = ['name', 'price', 'is_public'];

    protected $hidden = ['company_id'];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
