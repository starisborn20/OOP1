class Student {
    setName(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name + " " + this.age
        
    }
}

let student = new Student()
student.setName("Mike", 20)
console.log(student.getName())