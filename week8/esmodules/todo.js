export class TodoList {
  constructor() {
    this.tasks = [];
  }
  addTask(t) {
    this.tasks.push(t);
  }
  list() {
    console.log(this.tasks);
  }
}
