import React from 'react'
import { Row, Container, Col, Table, Button } from 'react-bootstrap';
import Navegation from '../../Components/Navegation';
import Delete from '../../Components/Delete'
import Form from './Form'


export default function Funcionarios(props) {

    return (
        <>
            <Container className='mt-5'>
                <Navegation />

                <Form className={"my-3"} action="Adicionar" variant="success" />

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
                                <td>{funcionario.cargo_string}</td>
                                <td>{funcionario.data_de_nascimento_formated}</td>
                                <td>{funcionario.salario} R$</td>
                                <td>
                                    <Row>
                                        <Col>
                                            <Form funcionario={funcionario} action="Editar" variant="primary" />
                                        </Col>
                                        <Col>
                                            <Delete
                                                rota={"funcionario"}
                                                id={funcionario.id}
                                                title={funcionario.nome}
                                            />
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