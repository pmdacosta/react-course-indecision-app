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