// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    </div>
);

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

let count = 0;
const addOne = () => {
    count++;
    render();
    console.log(count);
}

const subOne = () => {
    count > 0 && count--;
    render();
    console.log(count);
}

const reset = () => {
    count = 0;
    render();
    console.log(count);
}

const render = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    const appRoot = document.getElementById('app');

    ReactDOM.render(templateTwo, appRoot);
}

render();
