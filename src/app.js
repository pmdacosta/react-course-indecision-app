// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
    </div>
);

var user = {
    name: 'Andrew Mead',
    age: 25,
    location: 'new york'
} 

function capitalize(sentence) {
    return sentence.split(" ").map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ")
}


var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {capitalize(user.location)}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
