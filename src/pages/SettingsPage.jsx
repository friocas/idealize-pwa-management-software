import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import NavigationBarComp from '../components/NavigationBarComp';
import PinPadModalComp from '../components/PinPadModalComp';

export default function SettingsPage() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordType, setPasswordType] = useState(''); // 'admin' or 'carrapacho'

  const [showQuintaModal, setShowQuintaModal] = useState(false);
  const [quintas, setQuintas] = useState(['Quinta A', 'Quinta B']);
  const [selectedQuinta, setSelectedQuinta] = useState('None');
  const [newQuinta, setNewQuinta] = useState('');

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
      setQuintas(prev => [...prev, newQuinta]);
      setNewQuinta('');
    }
  };

  const handleDeleteQuinta = (index) => {
    setQuintas(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <NavigationBarComp props={{ isBackActive: true, pageName: 'Definições' }}>
      <div className="container mt-4">
        <div className='row mt-2'>
          <Form.Group className="mb-3">
            <Form.Label>Email de recuperação</Form.Label>
            <Form.Control type="text" size="sm" />
          </Form.Group>
        </div>
        <div className='row mt-2'>
          <Form.Group className="mb-3">
            <Form.Label>Password Admin</Form.Label>
            <Button className="form-control form-control-sm" variant="primary" onClick={() => handleOpenPasswordModal('admin')}>Alterar</Button>
          </Form.Group>
        </div>
        <div className='row mt-2'>
          <Form.Group className="mb-3">
            <Form.Label>Password Carrapacho</Form.Label>
            <Button className="form-control form-control-sm" variant="secondary" onClick={() => handleOpenPasswordModal('carrapacho')}>Alterar</Button>
          </Form.Group>
        </div>
        <div className='row mt-2'>
          <Form.Group className="mb-3">
            <Form.Label>Quinta Selecionada: {selectedQuinta && selectedQuinta}</Form.Label>
            <Button className="form-control form-control-sm" variant="success" onClick={() => setShowQuintaModal(true)}>Gerir</Button>
          </Form.Group>
        </div>

        {/* Quinta Modal */}
        <Modal show={showQuintaModal} onHide={() => setShowQuintaModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Gerir Quintas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {quintas.map((q, index) => (
              <div key={index} className="d-flex justify-content-between mb-2">
                <Form.Check type='radio' />
                <span>{q}</span>
                <div>
                  <Button variant="outline-primary" size="sm" onClick={() => setNewQuinta(q)}>Editar</Button>{' '}
                  <Button variant="outline-danger" size="sm" onClick={() => handleDeleteQuinta(index)}>Eliminar</Button>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between mb-2">
              <Form.Control className="w-50" type="text" size="sm" placeholder="Nova quinta" value={newQuinta} onChange={(e) => setNewQuinta(e.target.value)} />
              <div>
                <Button variant="outline-success" size="sm" onClick={handleAddQuinta}>Adicionar Quinta</Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => { setSelectedQuinta(newQuinta); setShowQuintaModal(false); }}>Selecionar Quinta</Button>
          </Modal.Footer>
        </Modal>

        {/* Password PIN Pad Modal */}
        <PinPadModalComp show={showPasswordModal} onClose={() => setShowPasswordModal(false)} onSubmit={handlePinSubmit} />
      </div>
    </NavigationBarComp>
  );
}
