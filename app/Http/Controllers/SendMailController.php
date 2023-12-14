<?php

namespace App\Http\Controllers;

use App\Mail\RequestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class SendMailController extends Controller
{
    public function send(Request $request)
    {
        if($request->method() == 'POST'){
            if(!Mail::to("b-a-l-v@yandex.ru")->send(new RequestMail($request))){
                $request->session()->flash('success','Запрос успешно отправлен!');
            }else{
                $request->session()->flash('error','Запрос не отправлен!');
            }
            return redirect()->route('mail.send');
        }

        $title = 'Отправка запроса';
        $previous_url = URL::previous();

        return view('mail.send', compact('title','previous_url'));
    }
}
