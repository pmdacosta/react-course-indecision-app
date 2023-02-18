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

  handleAddOption(option) {
    if (!option) {
      return 'Please provide an option to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  clearOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
    console.log(this.state);
  }

  removeOption(option) {
    this.setState(() => {
      const options = this.state.options;
      const index = options.indexOf(option);
      return {
        options: options.slice(0, index).concat(options.slice(index + 1))
      };
    });
  }

  handlePick() {
    const options = this.state.options;
    const index = Math.floor(Math.random() * options.length);
    this.setState(() => {
      return {
        pick: options[index]
      };
    });
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
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

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should I do?
        </button>
        {!!this.props.pick && <p>Do: {this.props.pick}</p>}
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.options.length}
          onClick={this.props.clearOptions}
        >
          Remove All
        </button>
        {
          this.props.options.map((option) =>
            <Option
              key={this.props.options.indexOf(option)}
              option={option}
              removeOption={this.props.removeOption}
            />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.removeOption = this.removeOption.bind(this);
  }

  removeOption() {
    this.props.removeOption(this.props.option);
  }

  render() {
    return (
      <div>
        <p>{this.props.option}</p>
        <button onClick={this.removeOption}>Remove</button>
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if (error) {
      this.setState(() => { return { error } });
    } else {
      this.setState(() => {
        return {
          error: undefined
        }
      });
    }
    event.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && (<p color="red">{this.state.error}</p>)}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
