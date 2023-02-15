// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
  optionsList() {
    return this.options.map((option) => <li>{option}</li>);
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

const appRoot = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      <p>{app.options.length > 0 ? <div>
        <button onClick={removeAllOptions}>remove all</button>
        <ul>{app.optionsList()}</ul>
        </div> : "No options"}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>add option</button>
      </form>
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