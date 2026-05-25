class Animal {
    constructor(public name: string) {}

    makeSound(): string {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "bark";
    }
}

const myDog = new Dog("Rex");
console.log(myDog.makeSound()); // Output: bark