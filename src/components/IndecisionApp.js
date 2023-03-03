import React from "react";
import AddOption from "./AddOption";
import Options from './Options';
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Please provide an option to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };

  clearOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  removeOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(word => word !== option)
    }));
  };

  handlePick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[index];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState({ options });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            pick={this.state.pick}
          />
          <div className="widget">
            <Options options={this.state.options}
              clearOptions={this.clearOptions}
              removeOption={this.removeOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;