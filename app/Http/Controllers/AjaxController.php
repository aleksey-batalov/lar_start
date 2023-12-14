<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AjaxController extends Controller
{
    protected $form_name;

    public function getForm(Request $request)
    {
        //называем компоненты формы в components.forms. ...  - как id на кнопке!!!
        $this->form_name = $request->id;
        if($this->form_name){
            return response()->json([
                'ok' => true,
                'view' => view('components.forms.'.$this->form_name)->render()
            ]);
        }
        return null;
    }
}
