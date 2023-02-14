'use strict';

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info!'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item 1'
        ),
        React.createElement(
            'li',
            null,
            'item 2'
        ),
        React.createElement(
            'li',
            null,
            'item 3'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Pedro Costa'
    ),
    React.createElement(
        'p',
        null,
        'Age: 25'
    ),
    React.createElement(
        'p',
        null,
        'Location: Porto'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
