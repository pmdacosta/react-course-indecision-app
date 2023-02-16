class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

const people = [
    new Person("Pedro", 25),
    new Person("Julio"),
    new Person(),
];

const jsx = <div>
    {people.map((person) => <p>{person.getDescription()}</p>)}
</div>;

ReactDOM.render(jsx, document.getElementById('app'));
