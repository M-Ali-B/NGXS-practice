import { State, Action, StateContext, Selector } from "@ngxs/store";
import { AppFetchListAction, AppAddItemAction } from "./app.actions";
import { AppService } from "./app.service";

export class Todo {
  // id: number;
  info: string;
}

export class AppStateModel {
  public todos: Todo[];
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
  static getTodoList(state: AppStateModel): Todo[] {
    return state.todos;
  }

  // @Selector()
  // static addTodoItem(state: AppStateModel): Todo[] {
  //   return state.todos;
  // }

  // add(ctx: StateContext<AppStateModel>, action: AppFetchListAction) {

  // //   const state = ctx.getState();
  // //  // ctx.setState({ todos: [...state.todos, action.payload] });
  // // ctx.setState({ todos: [...state.todos] });
  // }
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
    const data = this.appService.addTodoItem(action.payload);
    const state = ctx.getState();
    ctx.setState({
      todos: [...data]
    });
  }
}
