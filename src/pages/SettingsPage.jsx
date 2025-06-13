import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import NavigationBarComp from "../components/NavigationBarComp";
import PinPadModalComp from "../components/PinPadModalComp";
import Card from "react-bootstrap/Card";
import recoveryEmail from "../assets/imgs/recovery-email.png";
import adminPassword from "../assets/imgs/admin-password.png";
import capatazPassword from "../assets/imgs/capataz-password.png";
import quintasImage from "../assets/imgs/quintas.png";

export default function SettingsPage() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordType, setPasswordType] = useState(""); // 'admin' or 'capataz'

  const [showQuintaModal, setShowQuintaModal] = useState(false);
  const [quintas, setQuintas] = useState(["Quinta A", "Quinta B"]);
  const [selectedQuinta, setSelectedQuinta] = useState("None");
  const [newQuinta, setNewQuinta] = useState("");

  // Open numeric keypad modal for passwords
  const handleOpenPasswordModal = (type) => {
    setPasswordType(type);
    setShowPasswordModal(true);
  };

  // Handle PIN returned from modal
  const handlePinSubmit = (pin) => {
    alert(`Password for ${passwordType} set to: ${pin}`);
    setShowPasswordModal(false);
  };

  // Quinta modal handling
  const handleAddQuinta = () => {
    if (newQuinta && !quintas.includes(newQuinta)) {
      setQuintas((prev) => [...prev, newQuinta]);
      setNewQuinta("");
    }
  };

  const handleDeleteQuinta = (index) => {
    setQuintas((prev) => prev.filter((_, i) => i !== index));
  };

  const quintaModal = (
    <Modal show={showQuintaModal} onHide={() => setShowQuintaModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Gerir Quintas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {quintas.map((q, index) => (
          <div key={index} className="d-flex justify-content-between mb-2">
            <Form.Check type="radio" name="selectedQuinta" checked={selectedQuinta === q} onChange={() => setSelectedQuinta(q)} />
            <span>{q}</span>
            <div>
              <Button variant="outline-primary" size="sm" onClick={() => setNewQuinta(q)}>
                Editar
              </Button>{" "}
              <Button variant="outline-danger" size="sm" onClick={() => handleDeleteQuinta(index)}>
                Eliminar
              </Button>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-between mb-2">
          <Form.Control className="w-50" type="text" size="sm" placeholder="Nova quinta" value={newQuinta} onChange={(e) => setNewQuinta(e.target.value)} />
          <div>
            <Button variant="outline-success" size="sm" onClick={handleAddQuinta}>
              Adicionar Quinta
            </Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            setSelectedQuinta(selectedQuinta);
            setShowQuintaModal(false);
          }}>
          Selecionar Quinta
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <NavigationBarComp props={{ isBackActive: true, pageName: "Definições" }}>
      <div className="container mt-4">
        <div className="row">
          <div className="col mt-2">
            <Card className="mb-3 h-100 d-flex flex-column">
              <div style={{ flex: "1 1 auto", overflow: "hidden" }}>
                <Card.Img variant="top" src={recoveryEmail} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <footer className="p-4 d-flex flex-column">
                <Card.Title>Email de recuperação</Card.Title>
                <Form.Control className="mb-3" type="text" size="sm" />
                <Button className="form-control form-control-sm mt-auto" variant="success">
                  Guardar
                </Button>
              </footer>
            </Card>
          </div>

          <div className="col mt-2">
            <Card className="mb-3 h-100 d-flex flex-column">
              <div style={{ flex: "1 1 auto", overflow: "hidden" }}>
                <Card.Img variant="top" src={adminPassword} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <footer className="p-4 d-flex flex-column">
                <Card.Title className="mb-3">Password Admin</Card.Title>
                <Button className="form-control form-control-sm mt-auto" variant="success" onClick={() => handleOpenPasswordModal("admin")}>
                  Alterar
                </Button>
              </footer>
            </Card>
          </div>

          <div className="col mt-2">
            <Card className="mb-3 h-100 d-flex flex-column">
              <div style={{ flex: "1 1 auto", overflow: "hidden" }}>
                <Card.Img variant="top" src={capatazPassword} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <footer className="p-4 d-flex flex-column">
                <Card.Title className="mb-3">Password Capataz</Card.Title>
                <Button className="form-control form-control-sm mt-auto" variant="success" onClick={() => handleOpenPasswordModal("capataz")}>
                  Alterar
                </Button>
              </footer>
            </Card>
          </div>

          <div className="col mt-2">
            <Card className="mb-3 h-100 d-flex flex-column">
              <div style={{ flex: "1 1 auto", overflow: "hidden" }}>
                <Card.Img variant="top" src={quintasImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <footer className="p-4 d-flex flex-column">
                <Card.Title>Quintas</Card.Title>
                <Form.Label>Quinta Selecionada: {selectedQuinta}</Form.Label>
                <Button className="form-control form-control-sm mt-auto" variant="success" onClick={() => setShowQuintaModal(true)}>
                  Gerir
                </Button>
              </footer>
            </Card>
          </div>
        </div>

        {/* Quinta Modal */}
        {quintaModal}

        {/* Password PIN Pad Modal */}
        <PinPadModalComp show={showPasswordModal} onClose={() => setShowPasswordModal(false)} onSubmit={handlePinSubmit} />
      </div>
    </NavigationBarComp>
  );
}
