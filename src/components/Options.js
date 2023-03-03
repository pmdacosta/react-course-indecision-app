import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link"
        disabled={!props.options.length}
        onClick={props.clearOptions}
      >Remove All</button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please insert an option to get started!</p>}
    {
      props.options.map((option, index) =>
        <Option
          key={index}
          index={index}
          option={option}
          removeOption={props.removeOption}
        />)
    }
  </div>
);

export default Options;