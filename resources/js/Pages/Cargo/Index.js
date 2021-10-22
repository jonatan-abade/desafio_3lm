import React from 'react'
import { Row, Container, Table } from 'react-bootstrap';
import Navegation from '../../Components/Navegation';
import DeleteButton from '../../Components/DeleteButton';
import EditButton from '../../Components/EditButton';
import { Link } from '@inertiajs/inertia-react'

export default function Cargos(props) {
    return (
        <>
            <Container className='mt-5'>
                <Navegation />

                <Link className="my-3 btn btn-success" href="/">Adicionar</Link>

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
                                        <EditButton />
                                        <DeleteButton />
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