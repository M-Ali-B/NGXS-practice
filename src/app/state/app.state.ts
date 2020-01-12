import { State, Action, StateContext, Selector } from "@ngxs/store";
import { AppFetchListAction, AppAddItemAction } from "./app.actions";
import { AppService } from "./app.service";

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
    console.log(action.payload);
    this.appService.addTodoItem(action.payload);

    const state = ctx.getState();
    console.log(state.todos);
    ctx.setState({
      todos: [...state.todos]
    });
  }
}
