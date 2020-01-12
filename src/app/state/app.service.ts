import { Injectable } from "@angular/core";
import { Todo } from "./app.state";

@Injectable({
  providedIn: "root"
})
export class AppService {
  listOfTodos: Todo[] = [
    {
      "info": "debuging"
    },
    {
      "info": "coding Time"
    }
  ];

  constructor() {}
  getTodoList() {
    return this.listOfTodos;
  }

  addTodoItem(todoItem: Todo) {
    return this.listOfTodos.push(todoItem);
  }
}
