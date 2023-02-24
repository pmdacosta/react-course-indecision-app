import React from "react";

const Option = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.removeOption(props.option)
        }}>X</button>
      <span>{props.index + 1}. {props.option}</span>
    </div>
  );
}

export default Option;