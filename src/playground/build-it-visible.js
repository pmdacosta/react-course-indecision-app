const appRoot = document.getElementById('app');
const state = {
    show: false,
    getText() {
        return this.show ? 'Hide' : 'Show';
    }
}

const buttonToggle = () => {
    state.show = !state.show;
    render();
}

const render = () => {
    const template = <div>
        <h1>Visibility Toggle</h1>
        <button onClick={buttonToggle}>{state.getText()} details</button>
        {state.show && <p>Some text</p>} 
    </div>
    ReactDOM.render(template, appRoot);
}

render();