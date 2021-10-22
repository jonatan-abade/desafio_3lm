import React from 'react'
import { Row, Container, Table, Button } from 'react-bootstrap';
import Navegation from '../../Components/Navegation';
import DeleteButton from '../../Components/DeleteButton';
import EditButton from '../../Components/EditButton';
import { Link } from '@inertiajs/inertia-react'

export default function Funcionarios(props) {

    function deleteFunc() {
        e.preventDefault();
        window.alert(e);
        console.lo("oi")
    }

    return (
        <>
            <Container className='mt-5'>
                <Navegation />

                <Link className="my-3 btn btn-success" href="/">Adicionar</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Cargo</th>
                            <th>Data de nascimento</th>
                            <th>Salario</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.funcionarios.map((funcionario) =>
                            <tr key={funcionario.id}>
                                <td>{funcionario.id}</td>
                                <td>{funcionario.nome}</td>
                                <td>{funcionario.sobrenome}</td>
                                <td>{funcionario.cargo}</td>
                                <td>{funcionario.data_de_nascimento}</td>
                                <td>{funcionario.salario} R$</td>
                                <td>
                                    <Row>
                                        <EditButton />
                                        <DeleteButton onClick={deleteFunc} />
                                    </Row>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </Table>

            </Container>
        </>
    )
}