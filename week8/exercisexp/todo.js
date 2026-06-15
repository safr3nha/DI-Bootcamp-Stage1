export class TodoList {
  constructor() { this.tasks = []; }
  addTask(task) { this.tasks.push({ task, completed: false }); }
  markComplete(name) {
    const t = this.tasks.find(t => t.task === name);
    if (t) t.completed = true;
  }
  listTasks() { console.log(this.tasks); }
}