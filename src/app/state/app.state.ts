import { State, Action, StateContext, Selector } from "@ngxs/store";
import {
  AppFetchListAction,
  AppAddItemAction,
  AppRemoveItemAction
} from "./app.actions";
import { AppService } from "./app.service";
import { Pipe } from "@angular/core";
import { Observable } from "rxjs";
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
    const itemName = action.payload;

    const _data = this.appService.addTodoItem(itemName);

    ctx.setState({
      todos: _data
    });
  }

  @Action(AppRemoveItemAction)
  removeItem(ctx: StateContext<AppStateModel>, action: AppRemoveItemAction) {
    const index = action.payload;
    const _data = this.appService.deleteTodoItem(index);

    ctx.setState({
      todos: _data
    });
  }
}
