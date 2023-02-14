// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info!</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Pedro Costa</h1>
        <p>Age: 25</p>
        <p>Location: Porto</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
