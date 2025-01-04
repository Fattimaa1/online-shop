import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Navbar/MyNavbar";

const Root = () => {
  return (
    <Container fluid id="root-container">
      <Row>
        <MyNavbar />
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Root;
