import { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { ArrowClockwise, BackspaceFill, CheckCircleFill } from "react-bootstrap-icons";

export default function PinPadModalComp({ show, onClose, onSubmit, title }) {
  const [pin, setPin] = useState("");
  const modalTitle = title || "Introduzir PIN";

  const handlePress = (value) => {
    if (pin.length < 6) setPin((prev) => prev + value);
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    onSubmit(pin);
    setPin("");
  };

  const handleClose = () => {
    setPin("");
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <input type="password" value={pin} readOnly className="form-control text-center mb-3 " placeholder="PIN" />
        <Row className="g-2 justify-content-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <Col xs={4} key={num}>
              <Button variant="light" className="w-100 py-3" onClick={() => handlePress(num.toString())}>
                {num}
              </Button>
            </Col>
          ))}
          <Col xs={4}>
            <Button variant="secondary" className="w-100 py-3" onClick={handleBackspace}>
              <BackspaceFill className="fs-5" />
            </Button>
          </Col>
          <Col xs={4}>
            <Button variant="light" className="w-100 py-3" onClick={() => handlePress("0")}>
              0
            </Button>
          </Col>
          <Col xs={4}>
            <Button variant="success" className="w-100 py-3" onClick={handleSubmit}>
              <CheckCircleFill className="fs-5" />
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
