class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['a', 'b', 'c'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert('clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
        {
          this.props.options.map((option) =>
            <Option key={this.props.options.indexOf(option)}
              option={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>{this.props.option}</p>
    );
  }
}

class AddOption extends React.Component {
  onAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if(option) {
      alert(option);
    }
  }

  render() {
    return (
      <form onSubmit={this.onAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
