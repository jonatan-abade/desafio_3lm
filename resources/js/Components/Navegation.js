import React from 'react'
import { Nav, Alert } from 'react-bootstrap';
import { Link } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'

export default function Navegation() {
    const { flash } = usePage().props

    const pathname = window.location.pathname
    return (
        <>
            {flash.success && (
                <Alert variant="success">{flash.success}</Alert>
            )}

            <div className="nav nav-tabs nav-justified">
                <div className="nav-item">
                    <Link
                        href="/funcionarios"
                        data-rr-ui-event-key="/funcionarios"
                        className={pathname == "/funcionarios" ? "nav-link active" : "nav-link"}
                    >Funcionários</Link>
                </div>
                <div className="nav-item">
                    <Link
                        href="/cargos"
                        data-rr-ui-event-key="/cargos"
                        className={pathname == "/cargos" ? "nav-link active" : "nav-link"}
                    >Cargos</Link>
                </div>
            </div>
        </>
    )
}