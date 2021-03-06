import { React } from 'react'
import { Row, Col, Container, Table, Button } from 'react-bootstrap';
import Navegation from '../../Components/Navegation';
// import { Link } from '@inertiajs/inertia-react'
import Delete from '../../Components/Delete'
import Form from './Forms'

export default function Cargos(props) {

    return (
        <>
            <Container className='mt-5'>
                <Navegation />

                <Form className={"my-3"} action="Adicionar" variant="success" />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descricao</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cargos.map((cargo) =>
                            <tr key={cargo.id}>
                                <td>{cargo.id}</td>
                                <td>{cargo.descricao}</td>
                                <td>
                                    <Row>
                                        <Col>
                                            <Form cargo={cargo} action="Editar" variant="primary" />
                                        </Col>
                                        <Col>
                                            <Delete
                                                rota={"cargo"}
                                                id={cargo.id}
                                                title={cargo.descricao}
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