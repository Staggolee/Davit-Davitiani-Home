const squeare = (num) => {
    return num * num
}

console.log(squeare(5))

const people = [{
    name: 'Davit',
    age: 25
}, {
    name: 'Andrew',
    age: 27
}, {
    name: 'George',
    age: 30
}]

// const under30 = people.filter (function (person) {
//     return person.age < 30
// })

const under30 = people.filter( (person) => person.age < 30)
console.log(under30)

// find person with age 25

const age25 = people.find( (person) => person.age === 25)
console.log(age25)