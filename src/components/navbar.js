import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function TerraNavbar(props) {
  return (
 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Terra Incognita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#hours">Hours</Nav.Link>
            <Nav.Link href="/#directions">Directions</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/weddings">Weddings</Nav.Link>
            <Nav.Link href="/#camping">Camping</Nav.Link>
            <Nav.Link href="/#trails">Trails</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }


export default TerraNavbar;