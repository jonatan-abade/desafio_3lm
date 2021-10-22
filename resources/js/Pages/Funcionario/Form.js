import { React, useState } from 'react'
import { Button, Modal, Form, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia'


export default function FormFuncionario(props) {

    // console.log(props.cargos)
    const [lgShow, setShow] = useState(false);
    const [funcionario, setFuncionario] = useState({
        nome: "",
        sobrenome: "",
        cargo: "",
        data_de_nascimento: "",
        salario: ""
    });

    const nomeChange = (e) => { setFuncionario({ nome: e.target.value }); }
    const sobreNomeChange = (e) => { setFuncionario({ sobrenome: e.target.value }); }
    const cargoChange = (e) => { setFuncionario({ cargo: e.target.value }); }
    const nascimentoChange = (e) => { setFuncionario({ data_de_nascimento: e.target.value }); }
    const salarioChange = (e) => { setFuncionario({ salario: e.target.value }); }

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
                    setFuncionario(props.funcionario)
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
                                <Form.Control type="text" name="descricao"
                                    value={funcionario ? funcionario.nome : " "}
                                    onChange={nomeChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control type="text" name="sobrenome"
                                    value={funcionario ? funcionario.sobrenome : " "}
                                    onChange={sobreNomeChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Data de Nascimento</Form.Label>
                                <input type="date" name="data_de_nascimento"
                                    value={funcionario ? funcionario.data_de_nascimento : " "}
                                    onChange={nascimentoChange}
                                />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Label>Cargo</Form.Label>

                            <Form.Group>
                                <Form.Select aria-label="Cargo" name="cargo" size="lg"
                                    onChange={cargoChange}
                                    value={funcionario ? funcionario.cargo_string : " "}
                                >
                                    <option value={funcionario ? funcionario.cargo : ""}>
                                        {funcionario ? funcionario.cargo_string : " "}
                                    </option>

                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Label>Salário</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text >$</InputGroup.Text>
                                <FormControl aria-label="Dollar amount (with dot and two decimal places)"
                                    value={funcionario ? funcionario.salario : " "}
                                    onChange={salarioChange}
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