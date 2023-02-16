class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello I'm ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let desc = super.getDescription();
        if (this.hasMajor())
            desc += ` He is majoring in ${this.major}`;
        return desc;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation())
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        return greeting;
    }
}

const people = [
    new Person("Pedro", 25),
    new Person("Julio"),
    new Student(),
    new Student("Newton", 17, "Physics"),
    new Traveler("Carlos", 12, "Porto"),
    new Traveler(undefined,undefined,"nowhere")
];

const jsx = <div>
    {people.map((person) => <p key={Math.floor(Math.random() * 1000)}>{person.getDescription()}</p>)}
</div>;

ReactDOM.render(jsx, document.getElementById('app'));

console.log(people[4].getGreeting());
console.log(people[5].getGreeting());