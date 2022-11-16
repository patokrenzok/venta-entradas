<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait Multitenancy
{
    public static function bootMultitenancy()
    {
        if (auth()->check() && auth()->user()->company_id !== null) {
            static::creating(function ($model) {
                $model->company_id = auth()->user()->company_id;
            });

            static::addGlobalScope('multitenancy', function (Builder $builder) {
                return $builder->where('company_id', auth()->user()->company_id);
            });
        }
    }
}
