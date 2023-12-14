<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\ProductsFilter;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show(Request $request)
    {
        $products = Product::query();
        $products = (new ProductsFilter($products, $request))->apply()->get();

        return view('test.product_with_filters', compact('products'));
    }
}
