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

}
