import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  onSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      event.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (<p className="add-option-error">{this.state.error}</p>)}
        <form className="add-option" onSubmit={this.onSubmit}>
          <input type="text" name="option" className="add-option__input"/>
          <button className="button button--small">Add Option</button>
        </form>
      </div>
    );
  }
}