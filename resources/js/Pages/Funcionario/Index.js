import React from 'react'
import { Row, Container, Col, Table, Button } from 'react-bootstrap';
import Navegation from '../../Components/Navegation';
import { Link } from '@inertiajs/inertia-react'
import Delete from '../../Components/Delete'


export default function Funcionarios(props) {

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
                                            <Button variant="primary">Editar</Button>
                                        </Col>
                                        <Col>
                                            <Delete
                                                rota={"funcionario"}
                                                id={funcionario.id}
                                                title={funcionario.nome} />
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