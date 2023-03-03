import React from "react";

const Option = (props) => (
  <div>
    <span>{props.index + 1}. {props.option}</span>
    <button className="button button--link"
      onClick={() => {
        props.removeOption(props.option)
      }}>Remove</button>
  </div>
);

export default Option;