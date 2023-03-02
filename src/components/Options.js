import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <button
      disabled={!props.options.length}
      onClick={props.clearOptions}
    >Remove All</button>
    {props.options.length === 0 && <p>Please insert an option to get started!</p>}
    {
      props.options.map((option) =>
        <Option
          key={props.options.indexOf(option)}
          index={props.options.indexOf(option)}
          option={option}
          removeOption={props.removeOption}
        />)
    }
  </div>
);

export default Options;