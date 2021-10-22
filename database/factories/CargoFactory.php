<?php

namespace Database\Factories;

use App\Models\Cargo;
use Illuminate\Database\Eloquent\Factories\Factory;

class CargoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cargo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'descricao' => $this->faker->unique()->randomElement($array = array (
                'Programador',
                'Administrador de banco de dados',
                'Desenvolvedor web',
                'Administrador de rede',
                'Faixineiro',
                'Médico',
                'Músico',
                'Professor',
                'Bancário',
                'Pedreiro'
            )),
        ];
    }
}
