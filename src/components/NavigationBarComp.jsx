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
import { useEffect } from "react";
import { useState } from "react";

export default function NavigationBarComp({ children, props }) {
  const { isBackActive, pageName } = props || {};
  const [displayTime, setDisplayTime] = useState(new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayTime(new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    }, 60);
    return () => clearInterval(interval);
  }, [displayTime]);

  const projetName = import.meta.env.VITE_PRODUCT_SHORT_NAME;

  return (
    <>
      <div className="min-vh-100 bg-white d-flex flex-column">
        <Navbar className="bg-body-tertiary mb-4">
          <Container>
            <Navbar.Brand href="/">
              {/*<Image src={Logo} style={{ width: '3rem', height: '3rem' }} />{' '}*/}
              <span className="text-start fw-semibold">{projetName}</span>
            </Navbar.Brand>
            <InstallPWAComp />
            <div className="justify-content-end">
              <Nav className="me-auto">
                <Navbar.Text className="fs-5">{displayTime}</Navbar.Text>
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
            <nav>
              <ol className="breadcrumb">
                {isBackActive && (<li className="breadcrumb-item"><a href="/" className="text-decoration-none text-dark">Menu</a></li>)}
                {isBackActive && <li className="breadcrumb-item active"><a>{pageName}</a></li>}
              </ol>
            </nav>
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
