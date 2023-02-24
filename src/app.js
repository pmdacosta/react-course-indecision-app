import React from 'react';
import ReactDOM from 'react-dom';

const template = <h1 color="red">Hello World</h1>;
//const template = React.createElement('h1', {color: 'red'}, 'Hello World');

ReactDOM.render(template, document.getElementById('app'));

