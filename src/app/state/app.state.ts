import { State, Action, StateContext, Selector } from "@ngxs/store";
import {
  AppFetchListAction,
  AppAddItemAction,
  AppRemoveItemAction
} from "./app.actions";
import { AppService } from "./app.service";
import { tap } from "rxjs/operators";
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
  fetchList({ getState, setState }: StateContext<AppStateModel>) {
    return this.appService.getTodoList().pipe(
      tap(result => {
        //const state = getState();
        setState({
          todos: result
        });
      })
    );

    // const data = this.appService.getTodoList();
    // ctx.setState({
    //   todos: data
    // });
  }

  @Action(AppAddItemAction)
  addItem(
    { getState, setState }: StateContext<AppStateModel>,
    action: AppAddItemAction
  ) {
    const itemName = action.payload;

    return this.appService.addTodoItem(itemName).pipe(
      tap(result => {
        const state = getState();
        setState({
          todos: [...state.todos, result]
        });
      })
    );
  }

  @Action(AppRemoveItemAction)
  removeItem(
    { getState, setState }: StateContext<AppStateModel>,
    action: AppRemoveItemAction
  ) {
    const index = action.payload;
    return this.appService.deleteTodoItem(index).pipe(
      tap(result => {
        const state = getState();
        console.log("del" + state.todos);
        const filteredArray = state.todos.splice(index, 1);
        console.log(filteredArray);
      
      })
    );
  }
}
