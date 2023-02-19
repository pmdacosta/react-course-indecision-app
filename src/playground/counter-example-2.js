class Counter extends React.Component {
  constructor(props) {

    super(props);
    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0 
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const count = JSON.parse(json);
      if (count) {
        this.setState(() => ({ count }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }


  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    }); 
  }

  subOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count > 0 ? prevState.count - 1 : 0
      };
    }); 
  }

  reset() {
    this.setState(() => {
      return {
        count: 0
      };
    }); 
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button disabled={!this.state.count} onClick={this.subOne}>-1</button>
        <button disabled={!this.state.count} onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));