import React from "react";

const Card = (props) => {
  return (
    <div
      className={`rounded-lg p-8 bg-white drop-shadow-xl min-w-[300px] ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
