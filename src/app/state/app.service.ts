import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  listOfTodos: string[] = ["tomato" , "potato" ];

  constructor() {}
  getTodoList() {
    return this.listOfTodos;
  }

  addTodoItem(item){
    this.listOfTodos.push(item);
  return this.listOfTodos;
    
  }
deleteTodoItem(index){
  console.log(index);
  this.listOfTodos.splice(index,1);

return this.listOfTodos;
}
}
