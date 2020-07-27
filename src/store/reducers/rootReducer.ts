import { combineReducers } from "redux";

import { IErrorReducerState, errorReducer } from "./errorReducer";
import { IRouteReducerState, routeReducer } from "./routeReducer";

export interface IStoreState {
    errorReducer: IErrorReducerState;
    routeReducer: IRouteReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    errorReducer,
    routeReducer,
});
