import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Pencil, Trash } from 'react-bootstrap-icons';

export default function TableComp({ props }) {
    const data = props.data || [];

    const handleEdit = (id) => {
        alert(`Edit item ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Delete item ${id}`);
    };

    // Get all keys from the first object except 'id' to use as headings
    const headings = data.length > 0
        ? Object.keys(data[0]).filter(key => key !== 'id')
        : [];

    return (
        <>
            {/* Desktop Table View */}
            <div className="d-none d-md-block" style={{ maxHeight: '500px',maxWidth: '900px', margin: 'auto', overflowX: 'auto' }}>
                <Table responsive="sm" striped bordered hover style={{ minWidth: '700px' }}>
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            {headings.map((heading) => (
                                <th key={heading}>{heading.charAt(0).toUpperCase() + heading.slice(1)}</th>
                            ))}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                {headings.map((heading) => (
                                    <td key={heading}>
                                        {typeof row[heading] === 'object' && row[heading] !== null
                                            ? JSON.stringify(row[heading])
                                            : row[heading]}
                                    </td>
                                ))}
                                <td>
                                    <ButtonGroup>
                                        <Button variant="primary" size="sm" onClick={() => handleEdit(row.id)}>
                                            <Pencil />
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={() => handleDelete(row.id)}>
                                            <Trash />
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Mobile Card View */}
            <div className="d-md-none">
                <div className="row g-3">
                    {data.map((row) => (
                        <div key={row.id} className="col-12">
                            <Card className="mb-3">
                                <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
                                    <span>Record #{row.id}</span>
                                    <ButtonGroup>
                                        <Button variant="primary" size="sm" onClick={() => handleEdit(row.id)}>
                                            <Pencil />
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={() => handleDelete(row.id)}>
                                            <Trash />
                                        </Button>
                                    </ButtonGroup>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex flex-column gap-2">
                                        {headings.map((heading) => (
                                            <div key={heading}>
                                                <strong>{heading.charAt(0).toUpperCase() + heading.slice(1)}:</strong>{' '}
                                                {typeof row[heading] === 'object' && row[heading] !== null
                                                    ? JSON.stringify(row[heading])
                                                    : row[heading]}
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <Pagination className="d-flex align-items-center justify-content-center mt-4 pagination-dark">
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </>
    );
}
