// let todos = [{
//    name: "quickbooks review",
//    completed: true
// }, {
//    name: "reconcile YNAB",
//    completed: false
// }, {
//    name: "take out trash",
//    completed: false
// }, {
//    name: "cook dinner",
//    completed: true
// }, {
//    name: "practice piano",
//    completed: false
// }];

const todos = getStoredTodos();
console.log(todos);

let filters = {
   inputText: "",
   hide: false
};

renderTodos(todos, filters);

//Step 5:  Render the initial todolist which will be filtered down from there.


//Step 6:  Add event listener to input getting the value typed in and render todos
document.querySelector("#filterInput").addEventListener('input', e => {
   filters.inputText = e.target.value;
   renderTodos(todos, filters);
});

//Add input field and button to submit new todo
document.querySelector('#createTodo').addEventListener('click', e => {
   e.preventDefault();
   let inputValue = document.querySelector('#todoInput').value;
   let todoInput = {
      id: uuidv4(),
      name: inputValue,
      completed: false
   };

   todos.push(todoInput);

   saveTodos();

   renderTodos(todos, filters);
   document.querySelector('#todoInput').value = "";

   console.log("button was clicked");
});

document.querySelector('#checkFilter').addEventListener('change', e => {
   if (e.target.checked) {
      filters.hide = true;
   } else {
      filters.hide = false;
   };
   renderTodos(todos, filters);
});


// localStorage.clear();