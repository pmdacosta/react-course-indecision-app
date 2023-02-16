class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visible ? 'Hide' : 'Show'} details
        </button>
        {this.state.visible && (<p>Some text</p>)}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));