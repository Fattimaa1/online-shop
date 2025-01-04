import { Row, Col } from "react-bootstrap";
import "./CosmeticsGreeting.css";
import cosmetic from "../../../assets/cosmetics.png";
import BaseButton from "../.././Buttons/BaseButton";
import icon from "../../../assets/logo.svg";

const CosmeticsGreetings = () => {
  return (
    <Row className="cosmetics-greetings-row">
      <Col>
        <h1>Beauty that Empowers</h1>
        <img src={cosmetic} alt="photo" width="450px" />
      </Col>

      <Col className="cosmetics-second-col">
        <h2>Discover Your Routine!</h2>
        <p>
          Find the perfect products tailored to your unique skin and hair needs.
          <br />
          Let us guide you to the routine that works best for you.
        </p>
        <div className="cosmetics-buttons-wrapper">
          <BaseButton
            variant="primary"
            label={"My Routin"}
            onClick={() => alert("beutiful")}
          />
          <BaseButton
            variant="secondary"
            label={"cosmetics"}
            onClick={() => alert("tanks")}
          />
        </div>
      </Col>
    </Row>
  );
};

export default CosmeticsGreetings;
