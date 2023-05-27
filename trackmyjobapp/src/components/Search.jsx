import React from "react";

const Search = (props) => {
  const [element, setElement] = React.useState("");
  return (
    <div className="">
      <input
        className=" w-full p-3 my-3 rounded-md border-[2px] border-solid border-primary"
        placeholder="What are you looking for?"
        type="text"
        onChange={(e) => {
          setElement(e.target.value);
          props.onSearchChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
