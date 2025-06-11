import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Pencil, Trash } from 'react-bootstrap-icons';

export default function TableComp({ config, data }) {
  const columns = config.columns || [];
  const actions = config.actions || [];

  const handleAction = (action, item) => {
    if (typeof action.onClick === 'function') {
      action.onClick(item);
    }
  };

  return (
    <>
      {/* Desktop Table View */}
      <div className="d-none d-md-block" style={{ maxWidth: '100vw', margin: 'auto', overflowX: 'auto', maxHeight: '90vh', overflowY: 'auto' }}>
        <Table responsive="sm" striped bordered hover style={{ minWidth: '700px' }}>
          <thead className="table-dark" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <tr className="text-center align-middle">
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
              {actions.length > 0 && <th>Ações</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} >
                {columns.map((col) => (
                  <td key={col.key} className="text-center align-middle">
                    {typeof item[col.key] === 'object'
                      ? JSON.stringify(item[col.key])
                      : item[col.key]}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="text-center align-middle">
                    <ButtonGroup>
                      {actions.map((action, index) => (
                        <Button
                          key={index}
                          variant={action.variant || 'secondary'}
                          size="sm"
                          onClick={() => handleAction(action, item)}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="d-md-none">
        <div className="row g-3">
          {data.map((item) => (
            <div key={item.id} className="col-12">
              <Card className="mb-3">
                <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
                  <span>#{item.id}</span>
                  <ButtonGroup>
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant || 'secondary'}
                        size="sm"
                        onClick={() => handleAction(action, item)}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </ButtonGroup>
                </Card.Header>
                <Card.Body>
                  {columns.map((col) => (
                    <div key={col.key}>
                      <strong>{col.label}:</strong>{' '}
                      {typeof item[col.key] === 'object'
                        ? JSON.stringify(item[col.key])
                        : item[col.key]}
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (placeholder) */}
      <Pagination className="d-flex align-items-center justify-content-center mt-4 pagination-dark">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item active>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </>
  );
}