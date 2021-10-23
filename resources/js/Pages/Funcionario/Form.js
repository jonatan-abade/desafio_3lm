import { React, useState, useEffect, componentDidMount } from 'react'
import { Button, Modal, Form, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'

export default function FormFuncionario(props) {
    const [lgShow, setShow] = useState(false);

    const [funcionario, setFuncionario] = useState({
        nome: "",
        sobrenome: "",
        cargo_id: "",
        data_de_nascimento: "",
        salario: ""
    });

    const onChange = (ev) => {
        const { name, value } = ev.target

        setFuncionario({ ...funcionario, [name]: value })
    }

    const getReq = (props) => {

        if (props.funcionario) {
            setFuncionario(props.funcionario)
        }


    }

    const sendForm = () => {
        if (props.funcionario) {
            Inertia.put(`/funcionario/${props.funcionario.id}`, funcionario)
            setShow(false)
        } else {
            Inertia.post(`/funcionario`, funcionario)
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
                    getReq(props)
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
                        {props.action} Funcionário
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" name="nome"
                                    value={funcionario.nome}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control type="text" name="sobrenome"
                                    value={funcionario.sobrenome}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Data de Nascimento</Form.Label>
                                <input type="date" name="data_de_nascimento"
                                    value={funcionario.data_de_nascimento}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Label>Cargo</Form.Label>

                            <Form.Group>
                                <Form.Select aria-label="Cargo" name="cargo_id" size="lg"
                                    onChange={onChange}
                                    value={funcionario.cargo_id}
                                >
                                    <option value={funcionario.cargo_id}>
                                        {funcionario.cargo_id}
                                    </option>
                                    <option value="1">Desenvolvedor PHP</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Label>Salário</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text >$</InputGroup.Text>
                                <FormControl aria-label="Dollar amount (with dot and two decimal places)"
                                    name="salario"
                                    value={funcionario.salario}
                                    onChange={onChange}
                                />
                            </InputGroup>
                        </Col>

                    </Row>


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