import { TodoList } from './todo.js';

const myTodos = new TodoList();
myTodos.addTask('Estudar Node');
myTodos.addTask('Praticar Modules');
myTodos.markComplete('Estudar Node');
myTodos.listTasks();