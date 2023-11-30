class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log("Making Sound")
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
    bark() {
        console.log("Roof")
    }
}

let animal = new Animal("Boo")
let dog = new Dog("Knox", "ESKIMO")
console.log(dog.makeSound())
console.log(dog.bark())
