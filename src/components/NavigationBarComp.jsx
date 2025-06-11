import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeftCircleFill, ArrowLeft, GearFill } from "react-bootstrap-icons";
import Logo from '../assets/imgs/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function NavigationBarComp({ children, props }) {
    const { isBackActive, pageName } = props || {};
    return (
        <>
            <div className="min-vh-100 bg-white d-flex flex-column">
                <Navbar className="bg-body-tertiary mb-4">
                    <Container>
                        <Navbar.Brand href="/">
                            <Image src={Logo} style={{ width: '3rem', height: '3rem' }} />{' '}
                            <span className="text-start fw-semibold">TERRA VIGILANTE</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Autenticado como:&nbsp;
                            </Navbar.Text>
                            <NavDropdown title="Pedro Frias">
                                <NavDropdown.Item href="/settings">Opções</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">
                                    Sair
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container>
                    <div class="header mt-4">
                        <h1 class="header-title">{pageName}</h1>
                        <Breadcrumb>
                            {isBackActive && <Breadcrumb.Item href="/" className='link-dark'>Menu</Breadcrumb.Item>}
                            {isBackActive && <Breadcrumb.Item active>{pageName}</Breadcrumb.Item>}
                        </Breadcrumb>
                    </div>
                    {children}
                </Container>
                <footer className="mt-auto text-center ">
                    <div className="bg-dark py-3">
                        <Container>
                            <span className="text-white">© 2025 Terra Vigilante</span>
                        </Container>
                    </div>
                </footer>
            </div>
        </>
    );
}