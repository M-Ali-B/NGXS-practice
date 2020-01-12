import { Injectable } from "@angular/core";
import { Todo } from "./app.state";

@Injectable({
  providedIn: "root"
})
export class AppService {
  listOfTodos: string[] = ["tomato" , "potato" ];

  constructor() {}
  getTodoList() {
    return this.listOfTodos;
  }

  addTodoItem(todoItem: string) {
     this.listOfTodos.push(todoItem);
  }
}
