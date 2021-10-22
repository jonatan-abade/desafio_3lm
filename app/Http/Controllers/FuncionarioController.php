<?php

namespace App\Http\Controllers;

use App\Models\Cargo;
use App\Models\Funcionario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class FuncionarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $funcionarios = Funcionario::all();

        foreach ($funcionarios as $funcionario) {
            $funcionario->cargo_string = Cargo::findOrFail($funcionario->cargo_id)->descricao;
            $funcionario->data_de_nascimento_formated = date('d/m/Y', strtotime($funcionario->data_de_nascimento));
        }

        return Inertia::render('Funcionario/Index', [
            'funcionarios' => $funcionarios,
            'cargos' => Cargo::all(),
        ]);
    }


    public function store(Request $request)
    {
        Funcionario::create($request->all());

        return Redirect::route('funcionarios')->with('success', 'Funcionário cadastrado.');
    }

    public function update(Request $request, $id)
    {
        Funcionario::findOrFail($id)->update($request->except('cargo_string', 'data_de_nascimento_formated'));
        return Redirect::route('funcionarios')->with('success', 'Funcionário atualizado.');
    }

    public function destroy($id)
    {
        Funcionario::destroy($id);
        return Redirect::route('funcionarios')->with('success', 'Funcionario deletado.');
    }
}
