<?php

namespace Database\Factories;

use App\Models\Funcionario;
use Illuminate\Database\Eloquent\Factories\Factory;

class FuncionarioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Funcionario::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nome' => $this->faker->firstName('male' | 'female'),
            'sobrenome' => $this->faker->lastName(),
            'cargo_id' => rand(1, 5),
            'data_de_nascimento' => $this->faker->dateTime($max = '01-01-2000', $timezone = null),
            'salario' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 1000, $max = 20000)
        ];
    }
}
