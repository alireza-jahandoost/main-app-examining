import { Navbar, Container, Button, Nav } from "react-bootstrap";
const AppNavbar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto lead">
            <Nav.Link className="m-2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="m-2" href="#link">
              Help
            </Nav.Link>
            <Nav.Link className="m-2" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="m-2" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
          <Button variant="success" className="ms-auto m-2">
            Go To App
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
