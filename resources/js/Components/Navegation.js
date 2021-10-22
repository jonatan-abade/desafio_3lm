import React from 'react'
import { Nav, Alert } from 'react-bootstrap';
import { Link } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'

export default function Navegation() {
    const { flash } = usePage().props

    return (
        <>
            {flash.success && (
                <Alert variant="success">{flash.success}</Alert>
            )}

            <Nav justify variant="tabs" defaultActiveKey="/">
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