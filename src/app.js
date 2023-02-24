import sub, { wait } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

console.log('indecision app');
async function render() {
  await wait(1000);
  const h1 = document.createElement('h1');
  h1.innerText = 'Hello World!';
  document.body.appendChild(h1);
}

const child = {
  age: 8
};

const adult = {
  age: 20
};

console.log(`child isAdult = ${isAdult(child.age)}`);
console.log(`adult isAdult = ${isAdult(adult.age)}`);
console.log(`adult canDrink = ${canDrink(adult.age)}`);
console.log(`adult isSenior = ${isSenior(adult.age)}`);
console.log(`subtract: ${sub(7,2)}`);

render();