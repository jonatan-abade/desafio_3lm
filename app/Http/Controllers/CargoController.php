<?php

namespace App\Http\Controllers;

use App\Models\Cargo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CargoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Cargo/Index', [
            'cargos' => Cargo::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'descricao' => ['required', 'max:50'],
        ]);

        Cargo::create($request->all());

        return Redirect::route('cargos')->with('success', 'Cargo cadastrado.');
    }

    public function update(Request $request, $id)
    {
        Cargo::findOrFail($id)->update($request->all());
        return Redirect::route('cargos')->with('success', 'Cargo atualizado.');
    }

    public function destroy($id)
    {
        Cargo::destroy($id);
        return Redirect::route('cargos')->with('success', 'Cargo deletado.');
    }
}
