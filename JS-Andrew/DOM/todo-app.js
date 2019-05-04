// let ps = document.querySelectorAll('p');

// ps.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
        
//     }
// })


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
                completed: false
            }]

            

//Challenge : you have 2 todos left; add a p for each todo

//filter challenge : setup div, setup filters(searchText), create renderTodos

const filters = {
    searchText : '',
    hideCompleted : false
}

const filterTodo = function (todos, filters) {
    let filteredTodo = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodo = filteredTodo.filter(function (todo) {
        if(filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })

    const incompletedTodos = filteredTodo.filter(function (todo) {
        return !todo.completed
    })
   
    document.querySelector('#todos').innerHTML = ''
    
    let messageP = document.createElement('h2');
        document.querySelector('#todos').appendChild(messageP)
        


    filteredTodo.forEach(function (todo) {
        newTodo = document.createElement('p')
        newTodo.textContent = `${todo.text}`
        document.querySelector('#todos').appendChild(newTodo)
    })

    messageP.textContent = `You have ${incompletedTodos.length} todos left:`

    }


// Listen for new todo creation


// Listen for todo text change

document.querySelector('#filter-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    filterTodo(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({text: e.target.elements.newTodo.value, completed: false})
    e.target.elements.newTodo.value = ''
    filterTodo(todos, filters)
})

document.querySelector('#hide-todo').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked 
    filterTodo(todos, filters)
    console.log(filters)
})