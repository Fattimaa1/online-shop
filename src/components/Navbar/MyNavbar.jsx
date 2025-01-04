import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import VelvetRose from "../../assets/logo.svg";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-transparent">
      <Container fluid className="navbar-main-container">
        <Navbar.Brand href="/">
          <img src={VelvetRose} alt="logo" width="50px" />
          <span className="navbar-brand-name">Velvet Rose</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Nav className=" my-2 my-lg-0" navbarScroll>
            <NavDropdown title="Blog" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/blog/clothing">
                Clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="/blog/bags-shoses">
                Bags & Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="/blog/cosmetics">
                Cosmetics
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Login</Nav.Link>
            <Nav.Link href="#action2">
              <i className="bi bi-cart3"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
