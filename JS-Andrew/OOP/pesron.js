const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    
}

const me = new Person ('Davit', 'Davitiani', 25)

const person2 = new Person ('Andrew', 'Mead', 27)

// console.log(me, person2)


class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}. `

        this.likes.forEach( (like) => {
            bio += `${this.firstName} likes ${like}.`
    })
    return bio
}
}

const myPerson = new PersonClass('Davit', 'Davitiani', 25, ['Learning'])
console.log(myPerson.getBio())



