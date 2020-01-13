import { Component, OnInit } from "@angular/core";
import {  AppState } from "./state/app.state";
import { Store, Select } from "@ngxs/store";
import { AppFetchListAction, AppAddItemAction } from "./state/app.actions";
import { AppService } from "./state/app.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  @Select(AppState.getTodoList) getList$: Observable<string[]>;
  todo = "";
  title = "NGXS-practice";
  list: string[];
  constructor(private store: Store, private appService: AppService) {
   
  }
  ngOnInit(){
     this.store.dispatch(new AppFetchListAction());
     this.store.select(AppState.getTodoList).subscribe(res => {
       //console.log(res);
       this.list = res;
     });
  }

  onAddItem() {
    //this.appService.addTodoItem(this.todo);

    this.store.dispatch(new AppAddItemAction(this.todo));
    // this.getList$.subscribe((value) => 
    // console.log(value)
    // );
  }
}