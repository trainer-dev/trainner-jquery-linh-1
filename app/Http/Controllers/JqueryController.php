<?php


namespace App\Http\Controllers;

class JqueryController extends Controller
{
    public function get(){
        return view('index');
    }

    public function exam(){
        return view('exam');
    }
}