const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");




let toDos= [];

function deleteTodo(event){
   const li =  event.target.parentNode;
   todoList.removeChild(li);
   
  const cleanTodo = toDos.filter(function(todo){
         console.log(todo.id , parseInt(li.id));
       return todo.id !== parseInt(li.id);  //li id 와 같지않은 것들만 리턴한다. 지운거뺴고 다
       
    });
    toDos = cleanTodo;
   setTodo();
   
}

function setTodo(){
    localStorage.setItem("TODOS_LS",JSON.stringify(toDos));
}

function getList(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn  = document.createElement("button");
    const newId = toDos.length+1;
    li.id = newId;
    span.innerText = text;
    btn.innerText = "DONE";
    btn.addEventListener("click",deleteTodo)
    li.appendChild(span); li.appendChild(btn);
    todoList.appendChild(li);
   
    const todoObj = {
        text : text,
        id : toDos.length +1
    }
    toDos.push(todoObj);
   

}

function loadTodos(){
   const loadTodo= localStorage.getItem("TODOS_LS");
   if(loadTodo!==null){
       const parseTodo = JSON.parse(loadTodo);
       parseTodo.forEach(function(todo){
            getList(todo.text);
       })
   }
}

function handleSubmit(){
    event.preventDefault()
    const inputVal = todoInput.value
    getList(inputVal);
    setTodo();
    todoInput.value="";
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit",handleSubmit)
    
}
init();