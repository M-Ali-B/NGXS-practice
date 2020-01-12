import { Component } from '@angular/core';
import { Todo, AppState } from './state/app.state';
import { Store } from '@ngxs/store';
import { AppFetchListAction, AppAddItemAction } from './state/app.actions';
import { AppService } from './state/app.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todo = "";
  title = "NGXS-practice";
  list: Todo[];
  constructor(private store: Store, private appService: AppService) {
    this.store.dispatch(new AppFetchListAction());
    this.store.select(AppState.getTodoList).subscribe(res => {
      console.log(res);
      this.list = res;
    });
  }

  onAddItem(){
//this.appService.addTodoItem(this.todo);

this.store.dispatch(new AppAddItemAction({'info':this.todo}));

  }
}
