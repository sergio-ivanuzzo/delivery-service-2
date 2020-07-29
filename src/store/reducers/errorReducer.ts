import { AnyAction } from "redux";

import {
    ErrorActions,
    IAddErrorPayload
} from "../actions/errorActions";

export interface IErrorReducerState {
    errors: Array<IAddErrorPayload>;
}

const initialState: IErrorReducerState = {
    errors: [],
};

export const errorReducer = (
    state = initialState,
    action: AnyAction
): IErrorReducerState => {
    switch (action.type) {
        case ErrorActions.ADD_ERROR: {
            return {
                ...state,
                errors: [...state.errors, action.payload]
            }
        }

        case ErrorActions.REMOVE_ERRORS: {
            return {
                ...state,
                errors: state.errors.filter(
                    (error) => error.type !== action.payload.type
                )
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
};
