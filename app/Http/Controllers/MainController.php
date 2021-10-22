<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;

class MainController extends Controller
{
    public function index()
    {
        return Redirect::route('funcionarios');
    }
}
