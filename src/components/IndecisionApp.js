import React from "react";
import AddOption from "./AddOption";
import Options from './Options';
import Action from "./Action";
import Header from "./Header";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      pick: '',
    }
    this.handleAddOption = this.handleAddOption.bind(this);
    this.clearOptions = this.clearOptions.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
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
  handleAddOption(option) {
    if (!option) {
      return 'Please provide an option to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  clearOptions() {
    this.setState(() => ({ options: [] }));
  }
  removeOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter(word => word !== option)
    }));
  }
  handlePick() {
    const options = this.state.options;
    const index = Math.floor(Math.random() * options.length);
    this.setState(() => ({
      pick: options[index]
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          pick={this.state.pick}
        />
        <Options options={this.state.options}
          clearOptions={this.clearOptions}
          removeOption={this.removeOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;