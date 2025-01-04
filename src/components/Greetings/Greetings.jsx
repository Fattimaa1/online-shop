import CosmeticsGreetings from "./CosmeticsGreetings/CosmeticsGreetings";
import ClothingGreetings from "./ClothingGreetings/ClothingGreetings";
import { useState, useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import "./Greetings.css";

const Greetings = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalFunc = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentGreeting((prev) => (prev === 0 ? 1 : 0));
        setIsFading(false);
      }, 500); // Match CSS transition duration
    }, 10000);

    return () => clearInterval(intervalFunc); // Cleanup on unmount
  }, []);

  // Manual greeting switch on button click
  const handleGreetings = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentGreeting((prev) => (prev === 0 ? 1 : 0));
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="greetings">
      <div className={`greetings-content ${isFading ? "fade-out" : "fade-in"}`}>
        {currentGreeting === 0 ? <CosmeticsGreetings /> : <ClothingGreetings />}
        <div className="greetings-button">
          <i class="bi bi-arrow-right" onClick={handleGreetings}>
            {" "}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
