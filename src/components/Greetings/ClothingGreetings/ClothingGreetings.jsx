import cloth from "../../../assets/cloth1.png";
import { Row, Col } from "react-bootstrap";
import "./ClothingGreetings.css";
import MyWheel from "../../Wheel/MyWheel";
import cloth1 from "../../../assets/wheel-dress.jpg";
import bag from "../../../assets/wheel-bag.jpg";
import shoe from "../../../assets/wheel-shoe.jpg";

const ClothingGreetings = () => {
  const options = [
    { id: "1", content: <img src={cloth1} alt="Option 1" /> },
    { id: "2", content: <img src={bag} alt="option 2" /> },
    { id: "3", content: <img src={shoe} alt="Option 3" /> },
  ];
  return (
    <Row className="clothing-greetings-row">
      <Col className="clothing-text">
        <h1> Elevate Your Style, Effortlessly. </h1>
        <p>
          Discover timeless dresses, chic bags, and elegant shoes to complete
          your perfect look.
        </p>
      </Col>

      <Col>
        <img src={cloth} alt="ax" width={"400px"} />
      </Col>

      <Col>
        <MyWheel options={options} />
      </Col>
    </Row>
  );
};

export default ClothingGreetings;
