import { Form } from 'react-bootstrap';

export default function SearchBarComp({ value, onChange, placeholder }) {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        value={value}
        placeholder={placeholder || 'Pesquisar...'}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
}