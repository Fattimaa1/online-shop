import "./BaseButton.css";

const BaseButton = ({
  variant = "primary",
  leftIcon,
  rightIcon,
  onClick,
  label,
  disabled = false,
}) => {
  return (
    <button
      className={`base-button button--${variant} ${
        disabled ? "button--disabled" : ""
      }`}
      onClick={onClick}
    >
      {leftIcon && (
        <span>
          <img src={leftIcon} alt="" width={"20px"} />
        </span>
      )}
      {label && <span>{label}</span>}

      {rightIcon && (
        <span>
          <img src={rightIcon} alt="" />
        </span>
      )}
    </button>
  );
};

export default BaseButton;
