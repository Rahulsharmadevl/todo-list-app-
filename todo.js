// DOM SELECTION 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



// ADD EVENT LISTENER
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
document.addEventListener("DOMContentLoaded", displayTodo);




/*
<div class="todoDiv"> 
    <li class="newTodo">Go to GYM</li>
    <button class="checkButton">CheckIcon</button>
    <button  class="deleteButton">DeleteIcon</button>             
</div>
*/

// FUNCTIONS
function addTodo(event) {
  event.preventDefault();

  //create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");

  //create li
  const newTodo = document.createElement("li");
  newTodo.classList.add("newTodo");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  saveLocalTodo(todoInput.value);
  todoInput.value="";

  //create check button
  const checkButton = document.createElement("button");
  checkButton.classList.add("checkButton");
  checkButton.innerHTML = '<i class="fas fa-check-square"></i>';
  todoDiv.appendChild(checkButton);

  //create delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(deleteButton);

  //ul
  todoList.appendChild(todoDiv);


}


function saveLocalTodo(todo){
//todos :  ["hello", "go to gym"]

// create an array
let todos;
  if(localStorage.getItem('todos')===null){
    todos=[];
  }
  else{
    // convert into an obj
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  let convertIntoString = JSON.stringify(todos);

  localStorage.setItem("todos", convertIntoString);

}


function displayTodo(){
   let todos;
   if (localStorage.getItem('todos')===null){
      todos=[];
   }
   else{
    //  convert into an obj
    todos = JSON.parse(localStorage.getItem('todos'))
   }

   

   todos.forEach((todo)=>{
    //  console.log(todo);


     //create div
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todoDiv");

     //create li
     const newTodo = document.createElement("li");
     newTodo.classList.add("newTodo");
     newTodo.innerText = todo;
     todoDiv.appendChild(newTodo);
 

     //create check button
     const checkButton = document.createElement("button");
     checkButton.classList.add("checkButton");
     checkButton.innerHTML = '<i class="fas fa-check-square"></i>';
     todoDiv.appendChild(checkButton);

     //create delete button
     const deleteButton = document.createElement("button");
     deleteButton.classList.add("deleteButton");
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

     todoDiv.appendChild(deleteButton);
     todoList.appendChild(todoDiv);

   })

}

function deleteTodo(event) {
    const item = event.target;
    // console.log(item);

  if (item.classList[0] ==="deleteButton"){
    const todo = item.parentElement;
    todo.classList.add("deleteFn")
    // console.log(todo);
  }

  if (item.classList[0] === "checkButton") {
    const todo = item.parentElement;
    todo.classList.add("checkFn")
    // console.log(todo);
  }
}