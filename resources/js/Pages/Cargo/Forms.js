import { React, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'


export default function FormCargo(props) {

    const [lgShow, setShow] = useState(false);
    const [cargo, setCargo] = useState({});

    const handleChange = (e) => {
        setCargo({ descricao: e.target.value });
    }

    const sendForm = () => {
        if (props.cargo) {
            Inertia.put(`/cargo/${props.cargo.id}`, cargo)
            setShow(false)
        } else {
            Inertia.post(`/cargo`, cargo)
            setShow(false)
        }
    }

    return (
        <>
            <Button
                className={props.className}
                variant={props.variant}
                onClick={() => {
                    setShow(true);
                    setCargo(props.cargo)
                }
                }
            >
                {props.action}
            </Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {props.action} Cargo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control type="text" name="descricao"
                            value={cargo ? cargo.descricao : " "}
                            onChange={handleChange}
                        />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Fechar
                    </Button>

                    <Button variant="primary" onClick={sendForm}>Salvar</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}