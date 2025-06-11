import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {props?.props?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <fieldset disabled>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Disabled select</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" id="disabledFieldsetCheck" label="Can't check this" />
                        </Form.Group>
                    </fieldset>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='dark' onClick={props.onHide}>Voltar</Button>
                    <Button type="submit">Guardar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}