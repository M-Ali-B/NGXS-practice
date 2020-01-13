import { State, Action, StateContext, Selector } from "@ngxs/store";
import { AppFetchListAction, AppAddItemAction } from "./app.actions";
import { AppService } from "./app.service";
import { Pipe } from "@angular/core";
import { Observable } from 'rxjs';
export class AppStateModel {
  public todos: string[];
}
//state container
@State<AppStateModel>({
  name: "app",
  defaults: {
    todos: []
  }
})
export class AppState {
  constructor(private appService: AppService) {}

  @Selector()
  static getTodoList(state: AppStateModel): string[] {
    return state.todos;
  }

  @Action(AppFetchListAction)
  fetchList(ctx: StateContext<AppStateModel>) {
    const data = this.appService.getTodoList();
    ctx.setState({
      todos: data
    });
  }

  @Action(AppAddItemAction)
  addItem(ctx: StateContext<AppStateModel>, action: AppAddItemAction) {
   
    const data = action.payload;
    const state = ctx.getState().todos;
   // console.log(data);
    console.log(state);
    ctx.setState({
      todos: [...state, data], 
    });
  }
}
