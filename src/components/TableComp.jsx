import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import '../assets/css/custom.css';
import Pagination from 'react-bootstrap/Pagination';

export default function TableComp({ props }) {
    const data = [
        { id: 1, heading1: 'Table cell', heading2: 'Table cell', heading3: 'Table cell', heading4: 'Table cell', heading5: 'Table cell', heading6: 'Table cell' },
        { id: 2, heading1: 'Table cell', heading2: 'Table cell', heading3: 'Table cell', heading4: 'Table cell', heading5: 'Table cell', heading6: 'Table cell' },
        { id: 3, heading1: 'Table cell', heading2: 'Table cell', heading3: 'Table cell', heading4: 'Table cell', heading5: 'Table cell', heading6: 'Table cell' }
    ];
    return (
        <>
            <div className="d-none d-md-block">
                <Table responsive="sm" striped bordered hover>
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.heading1}</td>
                                <td>{row.heading2}</td>
                                <td>{row.heading3}</td>
                                <td>{row.heading4}</td>
                                <td>{row.heading5}</td>
                                <td>{row.heading6}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="d-md-none">
                <div className="row g-3">
                    {data.map((row) => (
                        <div key={row.id} className="col-12">
                            <Card className="mb-3">
                                <Card.Header className="bg-dark text-white">Record #{row.id}</Card.Header>
                                <Card.Body>
                                    <div className="d-flex flex-column gap-2">
                                        <div><strong>Heading 1:</strong> {row.heading1}</div>
                                        <div><strong>Heading 2:</strong> {row.heading2}</div>
                                        <div><strong>Heading 3:</strong> {row.heading3}</div>
                                        <div><strong>Heading 4:</strong> {row.heading4}</div>
                                        <div><strong>Heading 5:</strong> {row.heading5}</div>
                                        <div><strong>Heading 6:</strong> {row.heading6}</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
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