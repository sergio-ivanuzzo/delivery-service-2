import { ErrorActions } from "../actions/errorActions";
import {AnyAction} from "redux";

export interface IErrorReducerState {
    errors: string[];
}

const initialState: IErrorReducerState = {
    errors: [],
};

export const errorReducer = (
    state = initialState, action: AnyAction
): IErrorReducerState => {
    switch (action.type) {
        case ErrorActions.ADD_ROUTE_ERROR: {
            return {
                ...state,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
};
