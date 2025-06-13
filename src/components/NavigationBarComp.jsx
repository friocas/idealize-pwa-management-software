import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/imgs/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import InstallPWAComp from "./InstallPWAComp";
import Nav from "react-bootstrap/Nav";
import { GearFill } from "react-bootstrap-icons";
import { NavLink } from "react-bootstrap";

export default function NavigationBarComp({ children, props }) {
  const { isBackActive, pageName } = props || {};
  return (
    <>
      <div className="min-vh-100 bg-white d-flex flex-column">
        <Navbar className="bg-body-tertiary mb-4">
          <Container>
            <Navbar.Brand href="/">
              {/*<Image src={Logo} style={{ width: '3rem', height: '3rem' }} />{' '}*/}
              <span className="text-start fw-semibold">TERRA VIGILANTE</span>
            </Navbar.Brand>
            <InstallPWAComp />
            <div className="justify-content-end">
              <Nav className="me-auto">
                <Navbar.Text className="fs-5">{new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" })}</Navbar.Text>
                <NavLink href="/settings" className="d-flex align-items-center">
                  <GearFill className="fs-5" />
                </NavLink>
              </Nav>
            </div>
          </Container>
        </Navbar>

        <Container>
          <div className="header mt-4">
            <h1 className="header-title">{pageName}</h1>
            <Breadcrumb>
              {isBackActive && (
                <Breadcrumb.Item href="/" className="link-dark">
                  Menu
                </Breadcrumb.Item>
              )}
              {isBackActive && <Breadcrumb.Item active>{pageName}</Breadcrumb.Item>}
            </Breadcrumb>
          </div>
          {children}
        </Container>
        <footer className="mt-auto text-center pt-3">
          <div className="bg-dark py-3">
            <Container>
              <span className="text-white">© 2025 Idealize</span>
            </Container>
          </div>
        </footer>
      </div>
    </>
  );
}
