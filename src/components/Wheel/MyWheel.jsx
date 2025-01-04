import React from "react";
import "./MyWheel.css";

const MyWheel = ({ options }) => {
  return (
    <div className="wheel-container">
      <div className="wheel">
        {options?.map((option) => (
          <div key={option.id} className={`wheel-option option-${option.id}`}>
            {option.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWheel;
