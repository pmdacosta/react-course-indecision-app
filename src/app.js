class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
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
IndecisionApp.defaultProps = {
  options: []
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

const Action = (props) => {
  return (
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
};

const Options = (props) => {
  return (
    <div>
      <button
        disabled={!props.options.length}
        onClick={props.clearOptions}
      >Remove All</button>
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
};

const Option = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.removeOption(props.option)
        }}>X</button>
      <span>{props.index + 1}. {props.option}</span>
    </div>
  );
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
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: undefined }));
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
