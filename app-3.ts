import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngx-fake/ngrx";
import { incrementadorAction, multiplicarAction } from './contador/contador.actions';

class Store<T> {

    //private state: T;

    constructor(private reducer: Reducer<T>, private state: T) {
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(this.state, action)
    }
}

const store = new Store(contadorReducer, 10);

console.log(store.getState());

store.dispatch(incrementadorAction)
store.dispatch(incrementadorAction)

console.log(store.getState());

store.dispatch(multiplicarAction)

console.log(store.getState());