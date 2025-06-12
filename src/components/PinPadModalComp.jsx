import { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

export default function PinPadModalComp({ show, onClose, onSubmit }) {
  const [pin, setPin] = useState('');

  const handlePress = (value) => {
    if (pin.length < 6) setPin(prev => prev + value);
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setPin('');
  };

  const handleSubmit = () => {
    onSubmit(pin); 
    setPin('');
  };

  const handleClose = () => {
    setPin('');
    onClose(); 
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter PIN</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <input
          type="password"
          value={pin}
          readOnly
          className="form-control text-center mb-3"
          placeholder="PIN"
          style={{ maxWidth: '150px', margin: '0 auto' }}
        />
        <Row className="g-2 justify-content-center">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <Col xs={4} key={num}>
              <Button
                variant="light"
                className="w-100 py-3"
                onClick={() => handlePress(num.toString())}
              >
                {num}
              </Button>
            </Col>
          ))}
          <Col xs={4}>
            <Button
              variant="light"
              className="w-100 py-3"
              onClick={() => handlePress('0')}
            >
              0
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              variant="warning"
              className="w-100 py-3"
              onClick={handleBackspace}
            >
              ⌫
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              variant="danger"
              className="w-100 py-3"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
