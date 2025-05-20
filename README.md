Todo List with Filters

✅ Requirements:
Add Tasks – Input field + “Add” button

Display Tasks – Show all tasks in a list

Mark as Done – Clicking a checkbox marks the task as completed

Filters:

All

Completed

Pending
(Buttons to filter the visible list)

Delete Task – A button (🗑️) to remove a task

Bonus: Save tasks in LocalStorage so they persist after refresh


Home Page → Just a welcome screen

Todo Page → Your full-featured Todo app

1. Setup React Router:
/ → Home component with a welcome message + button to go to /todos

/todos → Todo component (your Challenge #2 code)

2. Save Todos in localStorage:
Load existing todos from localStorage when app loads

Save on every change

3. Component Structure:
Break your app into clean components:

<TodoList />

<TodoItem />

<AddTodo />

<Filter />

4. UI Enhancements:
Add basic styling

Show a message like “🎉 All tasks complete!” when no pending tasks