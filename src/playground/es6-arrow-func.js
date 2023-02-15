const square = function(x) {
    return x * x;
}

const squareArrow = (x) => {
    return x * x;
}

const conciseSquareArrow = (x) => x * x;

console.log(squareArrow(8));
console.log(conciseSquareArrow(9));

function applyTo(f, x)
{
    return f(x);
}

console.log(applyTo((x) => x * x, 5));

const getFirstNameL = (n) => {
    return n.split(' ')[0]
}

const getFirstNameS = (n) => n.split(' ')[0];


const fullName = 'Mike Smith';

console.log(getFirstNameL(fullName));
console.log(getFirstNameS(fullName));