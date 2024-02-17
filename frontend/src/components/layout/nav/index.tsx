'use client';
import { Button, Container, Navbar, Nav as NavCompo, NavDropdown, Offcanvas } from 'react-bootstrap';

const Nav = () => {
  return (
    <Navbar key="lag" expand="sm" className="main-page__nav-bar" data-bs-theme="dark" style={{ height: '65px' }}>
      <Container fluid>
        <Navbar.Brand href="#">JOLLY</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-sm`} aria-labelledby={`offcanvasNavbarLabel-expand-sm`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>JOLLY</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavCompo className="justify-content-end flex-grow-1 pe-3">
              <NavCompo.Item>
                <Button variant="light" className="main-page__nav-bar__item_button">
                  Become a sitter
                </Button>
              </NavCompo.Item>
              <NavCompo.Link href="#action2">Sign up</NavCompo.Link>
              <NavCompo.Link href="#action2">Login</NavCompo.Link>
              <NavCompo.Link href="#action2">Help</NavCompo.Link>
            </NavCompo>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Nav;
