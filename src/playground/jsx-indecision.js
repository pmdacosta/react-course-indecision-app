// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
  optionsList() {
    return this.options.map((option) =>
    <li key={this.options.indexOf(option)}>{option}</li>);
  }
};


const onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if (option) {
    event.preventDefault();
    event.target.elements.option.value = '';
    app.options.push(option);
    console.log(app.options);
    render();
  }
}

const removeAllOptions = () => {
  app.options = [];
  render();
}

let decision = '';
const onMakeDecision = () => {
  const index = Math.floor(Math.random() * app.options.length);
  decision = app.options[index];
  render();
}

const renderOptions = () => {
  return <div>
    <button onClick={removeAllOptions}>remove all</button>
    {decision && <p>Do: {decision}</p>}
    <ul>
      {app.options.map((option) =>
      <li key={app.options.indexOf(option)}>{option}</li>)}
    </ul>
  </div>
}

const appRoot = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      {app.options.length > 0 ? renderOptions() : <p>No options</p>}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>add option</button>
      </form>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const user = {
  name: 'Andrew Mead',
  age: 25,
  location: 'new york'
}

function capitalize(sentence) {
  return sentence.split(" ").map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(" ")
}

function getLocation(location) {
  if (location) {
    return <p>Location: {capitalize(location)}</p>;
  }
}

render();