import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-transparent px-6 py-3 my-3 rounded-xl border-solid border-2 border-secondary hover:bg-secondary hover:text-white text-sm {props.extrastyles}`}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
