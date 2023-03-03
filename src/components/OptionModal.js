import React from "react";
import ReactModal from "react-modal";

const OptionModal = (props) => (
  <ReactModal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={500}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button button--small" onClick={props.handleClearSelectedOption}>Okay</button>
  </ReactModal>
);

export default OptionModal;