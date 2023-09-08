let todos = [

    {
        id:1,
        text: 'Homework'
    },

    // {
    //     id:2,
    //     text: 'Classwork'
    // },
    // {
    //     id:3,
    //     text: 'Washing'
    // },

]


const todoList = document.querySelector('.todo_list')
const addBtn = document.querySelector('.add')
const input = document.querySelector('.todo_input')
const box = document.querySelector('.box')

function update(){
  todoList.innerHTML = ''
    
for(let todo of todos){
    todoList.innerHTML += `    <div class="main1">
                            <div class= "todo">
                            <input type="checkbox" id="${todo.id}">
                            <label for="${todo.id}"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path  d="M18.7 7.2c-.4-.4-1-.4-1.4 0l-7.5 7.5l-3.1-3.1c-.4-.4-1-.4-1.4 0c-.4.4-.4 1 0 1.4l3.8 3.8c.2.2.4.3.7.3c.3 0 .5-.1.7-.3l8.2-8.2c.4-.4.4-1 0-1.4z"/></svg></label>
                             <p>${todo.text}</p>
                            </div>
                            <button id="${todo.id}d"  class="deleteBtn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"/></svg></button>
                               </div>`
}
}

update()


function addTodoFunction(){
    const newTodo = {
        id:todos.length === 0 ? 1 : todos.at(-1).id+ 1 ,
        text: input.value


    }

    todos.push(newTodo)
    input.value = ''
    update()
}

function deleteTodo(id){
todos =todos.filter(todo => todo.id !== id)
update()
}

addBtn.addEventListener('click' , addTodoFunction)


box .addEventListener('click', (e) => {

if ( e.target.id.includes('d')){
    deleteTodo(parseInt(e.target.id))
}

})
