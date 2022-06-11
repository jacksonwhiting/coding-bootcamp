let todos = [{
   name: "quickbooks review",
   completed: false
}, {
   name: "reconcile YNAB",
   completed: false
}, {
   name: "take out trash",
   completed: true
}, {
   name: "cook dinner",
   completed: true
}, {
   name: "practice piano",
   completed: false
}];


let findTodo =
});

let removeTodo = function (todoList, text) {
   let name = todoList.findIndex(function (todo) {
      return todo.name.includes(text);
   });
};

remove





// let todos = [
//    'quickbooks review',
//    'reconcile YNAB',
//    'take out trash',
//    'cook dinner',
//    'practice piano'
// ];
// console.log(`You have ${todos.length} tasks to do today`);

// let todoList = function (todos) {
//    todos.forEach((name, index) => {
//       console.log(`${index +1}: ${name}`);
//    });
// };

// todoList(todos, 1);

// let todoList2 = function (todos) {
//    for (let i = 0; i < todos.length; i++) {
//       console.log(`${i+1}: ${todos[i]}`);
//    };
// };

// todoList2(todos);

// Delete the third item
// todos.splice(2, 1);
// console.log(todos);

// Add an item to the end of the array
// todos.push('fly home');
// console.log(todos);

// Remove the first item from the list
// todos.shift();
// console.log(todos);

// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[3]}`);