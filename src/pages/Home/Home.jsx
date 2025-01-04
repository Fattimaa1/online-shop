import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Greetings from "../../components/Greetings/Greetings";

const Home = () => {
  return (
    <Container fluid id="home-main-container">
      <Greetings />
    </Container>
  );
};

export default Home;
