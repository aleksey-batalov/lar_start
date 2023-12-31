<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function regForm()
    {
        return view('user.reg_form');
    }

    public function regStore(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password), // bcrypt - шифрование
        ]);

        // запись в сессию
        //session()->flash('success', 'Регистрация пройдена');

        // сразу авторизовать
        //Auth::login($user);

        return redirect()->route('index');
    }

    public function loginForm()
    {
        return view('user.login_form');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if(Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ])){
            session()->flash('success', 'Вы авторизованы');
            if(Auth::user()->is_admin){
               return redirect()->route('admin.index');
            }else{
                return redirect()->route('index');
            }
        }
        return redirect()->back()->with('error', 'Не корректный логин или пароль');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('index');
    }

}
