import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from '@inertiajs/inertia-react'

export default function Navegation() {
    return (
        <>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Link className="nav-link" href="/">Pessoas</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" href="/cargos">Cargos</Link>
                </Nav.Item>
            </Nav>
        </>
    )
}