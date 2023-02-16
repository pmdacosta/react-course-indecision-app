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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options component here</p>
        {this.props.options.map((option) =>
          <Option key={this.props.options.indexOf(option)}
            option={option} />
        )}
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
  render() {
    return (
      <div>
        <p>AddOption component here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
