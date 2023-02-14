'use strict';

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h2',
        null,
        app.subtitle
    )
);

var user = {
    name: 'Andrew Mead',
    age: 25,
    location: 'new york'
};

function capitalize(sentence) {
    return sentence.split(" ").map(function (word) {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        capitalize(user.location)
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
