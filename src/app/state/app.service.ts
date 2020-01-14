import { Injectable } from "@angular/core";
import {of} from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class AppService {
  listOfTodos: string[] = ["tomato" , "potato" ];

  constructor() {}
  getTodoList() {
    console.log(of(this.listOfTodos));
    return of(this.listOfTodos);
   
  }

  addTodoItem(item){
   // this.listOfTodos.push(item);
  return of(item);
    
  }
deleteTodoItem(index){
  console.log(index);
  // this.listOfTodos.splice(index,1);

return of(index);
}
}
