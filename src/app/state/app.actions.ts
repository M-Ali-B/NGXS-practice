import { Todo } from './app.state';

export class AppFetchListAction {
  static readonly type = '[App] Fetch List';
 // constructor(public payload: string) { }
}

export class AppAddItemAction {
         static readonly type = "[App] Add Item";
         constructor(public payload: string) {}
       }
