import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

export default function TableComp({ config, data }) {
  const columns = config.columns || [];
  const actions = config.actions || [];
  const itemsPerPage = config.itemsPerPage || 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleAction = (action, item) => {
    if (typeof action.onClick === 'function') {
      action.onClick(item);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const paginationItems = [];
  const pageLimit = 2;
  const startPage = Math.max(1, currentPage - pageLimit);
  const endPage = Math.min(totalPages, currentPage + pageLimit);

  if (startPage > 1) {
    paginationItems.push(
      <Pagination.Item key={1} onClick={() => setCurrentPage(1)}>
        1
      </Pagination.Item>
    );
    if (startPage > 2) {
      paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
    }
  }

  for (let number = startPage; number <= endPage; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
    }
    paginationItems.push(
      <Pagination.Item key={totalPages} onClick={() => setCurrentPage(totalPages)}>
        {totalPages}
      </Pagination.Item>
    );
  }

  return (
    <>
      {/* Desktop Table View */}
      <div className="d-none d-md-block" style={{ maxWidth: '100vw', margin: 'auto', overflowX: 'auto', maxHeight: '90vh', overflowY: 'auto' }}>
        <Table responsive="sm" striped bordered hover style={{ minWidth: '700px', textAlign: 'center' }}>
          <thead className="table-dark" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
              {actions.length > 0 && <th>Ações</th>}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                {columns.map((col) => (
                  <td key={col.key} style={{ verticalAlign: 'middle' }}>
                    {typeof item[col.key] === 'object'
                      ? JSON.stringify(item[col.key])
                      : item[col.key]}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td style={{ verticalAlign: 'middle' }}>
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
          {currentData.map((item) => (
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

      {/* Pagination */}
      <Pagination className="d-flex align-items-center justify-content-center mt-4 pagination-dark">
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </>
  );
}