import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBarComp from '../components/NavigationBarComp';
import TableComp from '../components/TableComp';
import Button from 'react-bootstrap/Button';
import { Plus } from 'react-bootstrap-icons';
import ModalCreateComp from '../components/ModalCreateComp';
import { useState } from "react";

export default function PontoPage() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <NavigationBarComp props={{ isBackActive: true, pageName: 'Picagem de Ponto' }}>
        <div className="row">
          <TableComp props={{}} />
        </div>
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
          <Button variant="dark" size="lg" className="rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }} 
            onClick={() => setModalShow(true)}>
            <Plus size={25} />
          </Button>
        </div>

        <ModalCreateComp show={modalShow} onHide={() => setModalShow(false)} props={{title: 'Criar Cenas'}}/>
      </NavigationBarComp>
    </>
  );
}