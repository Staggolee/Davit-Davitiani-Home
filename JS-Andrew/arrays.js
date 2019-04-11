// notes

// const notes = ['Note 1', 'Note 2', "Note 3"]

// console.log(notes[notes.length - 1])

// //todo challenge
// // create array - 5 todo, you have x todos, 

// const todos = ["learn JS", "play football", "learn history", "do homework", "watch movies"]
// console.log(`you have ${todos.length} todo-s`);
// console.log(`your first todo is: ${todos[0]}, and 4-th todo is: ${todos[todos.length-2]}`)



// const notes = ['Note 1', 'Note 2', "Note 3"]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// console.log(notes.unshift('my first note'))

// notes.splice(1, 0, 'This is the new second item')

// notes[2] = 'this is now the new note 3'

// console.log(notes)
// console.log(notes.length)


//challenge: delete 3rd itm, add new into the end, remove first

// const todos = ["learn JS", "play football", "learn history", "do homework", "watch movies"]

// todos.splice(2, 1)
// todos.push('the new last item')
// todos.shift()
// console.log(`you have ${todos.length} todo-s`);
// console.log(todos)
 



//Loop over arrays

// const notes = ['Note 1', 'Note 2', "Note 3"]

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)

// })

// console.log(notes)
// console.log(notes.length)

//challenge : 

// const todos = ["learn JS", "play football", "learn history", "do homework", "watch movies"]

// todos.splice(2, 1)
// todos.push('the new last item')
// todos.shift()
// console.log(`you have ${todos.length} todo-s`);
// todos.forEach(function (item, index) {
//     const num = index + 1; 
//     console.log(`${num}. ${item}`)
// })


//For loop

// const notes = ['Note 1', 'Note 2', "Note 3"]

// notes.forEach(function (item, index) {
    // console.log(index)
    // console.log(item)

// })

// console.log(notes.length)
// console.log(notes)

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
    
// }

//challenge 

// const todos = ["learn JS", "play football", "learn history", "do homework", "watch movies"]

// todos.splice(2, 1)
// todos.push('the new last item')
// todos.shift()
// console.log(`you have ${todos.length} todo-s`);

// for(let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }


//Searching arrays:

// const notes = [{
//     title: 'My nex trip',
//     body: 'I would like to go to Spain'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better'
// }, {
//     title: 'Office modifications',
//     body: 'Get a new seat'
// }]

// const findNote = function(notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
    
// }

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'Office modifications')
// console.log(note)


//Challenge : 1. convert to objects : text and completed; 
// 2. create function to remove todo by text value;

const todos = [{
    text: "learn JS",
    completed: true
}, {
    text: "play football",
    completed: false
},{
    text: "learn history",
    completed: false
},{
    text: "do homework",
    completed: true
},{
    text: "watch movies",
    completed: true
}]

let deleteTodo = function(todos, text) {
    const index =  todos.findIndex(function(index) {
        return index.text.toLowerCase() === text.toLowerCase()
       
    })
    return todos.splice(index, 1)
} 

console.log(deleteTodo(todos, 'play football'))
console.log(deleteTodo(todos, 'do homework'))
console.log(todos)
