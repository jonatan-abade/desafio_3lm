import React from 'react'
import { Row, Container, Col, Table } from 'react-bootstrap';
import Navegation from '../../Components/Navegation';
import { Link } from '@inertiajs/inertia-react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'


export default function Funcionarios(props) {

    let handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
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
                                        <Col>
                                            <PencilAltIcon style={{ width: '2em', color: 'blue', cursor: 'pointer' }} />
                                        </Col>
                                        <Col>
                                            <TrashIcon style={{ width: '2em', color: 'red', cursor: 'pointer' }} onClick={handleClick} />
                                        </Col>
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