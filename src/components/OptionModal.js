import React from "react";
import ReactModal from "react-modal";

const OptionModal = (props) => (
  <ReactModal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </ReactModal>
);

export default OptionModal;