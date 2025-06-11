import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBarComp from '../../components/NavigationBarComp';
import TableComp from '../../components/TableComp';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';
import ModalCreateComp from '../../components/ModalCreateComp';
import { useState, useEffect } from "react";
import SearchBarComp from '../../components/SearchBarComp';
import { tableConfig } from './EmployeesPageData';

export default function EmployeesPage() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setData(json?.products))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Aplicar filtro de search, se existir
  const searchFilter = tableConfig.filters?.find(f => f.type === 'search');
  const filteredData = searchFilter
    ? data.filter(item =>
        item[searchFilter.key]
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : data;

  return (
    <>
       <NavigationBarComp props={{ isBackActive: true, pageName: 'Listagem de colaboradores' }}>
        <div className="row">
          {searchFilter && (
            <SearchBarComp
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder={searchFilter.placeholder}
            />
          )}
          <TableComp config={tableConfig} data={filteredData} />
        </div>

        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
          <Button
            variant="dark"
            size="lg"
            className="rounded-circle p-0 d-flex align-items-center justify-content-center"
            style={{ width: '60px', height: '60px' }}
            onClick={() => setModalShow(true)}
          >
            <Plus size={25} />
          </Button>
        </div>

        <ModalCreateComp
          show={modalShow}
          onHide={() => setModalShow(false)}
          title="Criar Cenas"
        />
      </NavigationBarComp>
    </>
  );
}