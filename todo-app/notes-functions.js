const getStoredTodos = function () {
   let storedTodos = JSON.parse(localStorage.getItem('todos'));

   if (storedTodos !== null) {
      return storedTodos;
   } else {
      return [];
   }
};

const saveTodos = function () {
   localStorage.setItem('todos', JSON.stringify(todos));
};


let todosDiv = document.querySelector("#todoList");

//Render filtered todos by completion
let renderTodos = function (todos, filters) {
   //Step 1:  Create filter for todos based on filter object
   let filteredTodos = todos.filter(function (todo) {
      return todo.name.toLowerCase().includes(filters.inputText.toLowerCase());
   });

   //Step 2:  Create incompete todos array
   let incompleteTodos = filteredTodos.filter(todo => {
      return !todo.completed;
   });

   //Step 3:  Create message in h2 of how many todos left
   let summaryDiv = document.querySelector('#summaryStatement');
   summaryDiv.innerHTML = "";

   summaryDiv.appendChild(generateSummaryText(incompleteTodos));

   todosDiv.innerHTML = "";

   if (!filters.hide) {
      filteredTodos.forEach(todo => {
         todosDiv.appendChild(generateTodoDOM(todo));
      });
   } else {
      incompleteTodos.forEach(todo => {
         todosDiv.appendChild(generateTodoDOM(todo));
      })
   };
};

const generateTodoDOM = function (todo) {
   const todoDiv = document.createElement('div');
   const todoCheckBox = document.createElement('input');
   const todoSpan = document.createElement('span');
   const todoButton = document.createElement('button');

   todoCheckBox.setAttribute('type', 'checkbox');
   todoCheckBox.checked = todo.completed;
   todoCheckBox.addEventListener('change', e => {
      console.log(todoCheckBox.checked);
      toggleCheckbox(todo.id, todoCheckBox);
      renderTodos(todos, filters);
   });
   todoDiv.appendChild(todoCheckBox);

   todoSpan.textContent = todo.name;
   todoDiv.appendChild(todoSpan);

   todoButton.textContent = 'x';
   todoDiv.appendChild(todoButton);
   todoButton.addEventListener('click', e => {
      e.preventDefault();
      removeTodo(todo.id);
      saveTodos();
      renderTodos(todos, filters);
   });

   return todoDiv
};

const generateSummaryText = function (incompleteTodos) {
   const summary = document.createElement('h2');
   summary.textContent = `You have ${incompleteTodos.length} todos left`;
   return summary;
};

const removeTodo = function (id) {
   let index = todos.findIndex(function (todo) {
      return todo.id === id;
   });

   if (index > -1) {
      todos.splice(index, 1);
   }
};

const toggleCheckbox = function (id, input) {
   let todo = todos.find(function (item) {
      return item.id === id;
   });

   todo.completed = !todo.completed;
   console.log(todos);

   saveTodos(todos);
};