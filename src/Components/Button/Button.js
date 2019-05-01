import React from "react";

const Button = ({ style, className, handleClick, title }) => {
  return (
    <div className="flex pt-2">
      <button style={style} className={className} onClick={() => handleClick()}>
        {title}
      </button>
    </div>
  );
};
export default Button;
