<?php


namespace App;

class ProductsFilter extends QueryFilter
{
    protected $price_min = 0;
    protected $price_max = 5000000;

    //Фильтры
    //название по имени get параметра
    public function model($value)
    {
       $this->builder->where("model", "like", "%$value%");
    }
    public function type($value)
    {
        if($value != 'all'){
            $this->builder->where("type", $value);
        }
    }
    public function brand($value)
    {
        $brands = preg_split("/[,]/",$value);
        $this->builder->whereIn("brand", $brands);
    }

    public function min($value)
    {
        if($value != null && $this->request->max == null){
            $this->builder->where("price", ">", $value);
            $this->builder->where("price", "<", $this->price_max);
        }else if($value != null){
            $this->builder->where("price", ">", $value);
        }
    }
    public function max($value)
    {
        if($value != null && $this->request->min == null){
            $this->builder->where("price", ">", $this->price_min);
            $this->builder->where("price", "<", $value);
        }else if($value != null){
            $this->builder->where("price", "<", $value);
        }
    }

}
