// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    arguments[0] = 0;
    console.log(arguments);
    return a + b;
}

console.log(add(5, 6, 1001));

const addArrow = (a, b) => {
    // arguments is not defined
    // console.log(arguments);
    return a + b;
}

console.log(addArrow(5, 6, 1001));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        this.cities.forEach(function (city) {
            // Type Error
            // this gets bound to this function instead of the
            // user object
            console.log(this.name + ' lived in ' + city);
        })
    }
}

// user.printPlacesLived();

const es6user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // New es6 syntax
    printPlacesLived() {
        this.cities.forEach((city) => {
            // this keyword works as intended here
            console.log(this.name + ' lived in ' + city);
        })
    }
}

// using map

const es6userMap = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // New es6 syntax
    printPlacesLived() {
        this.cities.map(
            (city) => console.log(this.name + ' has lived in ' + city)
        );
    }
}

es6userMap.printPlacesLived();

const multiplier = {
    numbers: [1,3,67,40],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());