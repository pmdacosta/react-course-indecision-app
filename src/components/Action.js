import React from "react";

const Action = (props) => (
  <div>
    <button
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
      What should I do?
    </button>
    {!!props.pick && <p>Do: {props.pick}</p>}
  </div>
);

export default Action;