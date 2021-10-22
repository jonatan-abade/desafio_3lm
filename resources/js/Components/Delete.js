import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'

export default function Delete(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };

    const deleteModel = () => {
        Inertia.delete(`/${props.rota}/${props.id}`)
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Apagar
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Tem certeza que deseja apagar "{props.title}"?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Está operação não pode ser desfeita.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>

                    <Button variant="primary" onClick={deleteModel} >Apagar</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}