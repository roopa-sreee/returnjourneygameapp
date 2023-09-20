import React from "react";
import "./index.css";

const LevelButton = (props) => {
  const { buttonDetails, isActive, onClickLevelButton } = props;
  const { value, id, clicks } = buttonDetails;

  const onClickButton = () => {
    onClickLevelButton(id, clicks);
  };

  const buttonClass = isActive ? "active-button-class" : "level-button";

  return (
    <li>
      <button className={buttonClass} onClick={onClickButton}>
        {value}
      </button>
    </li>
  );
};

export default LevelButton;
