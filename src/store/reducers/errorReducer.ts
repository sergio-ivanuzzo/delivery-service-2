import { AnyAction } from "redux";

import {
    ErrorActions,
    IAddErrorCompletePayload
} from "../actions/errorActions";

export interface IErrorReducerState {
    errors: Array<IAddErrorCompletePayload>;
}

const initialState: IErrorReducerState = {
    errors: [],
};

export const errorReducer = (
    state = initialState,
    action: AnyAction
): IErrorReducerState => {
    switch (action.type) {
        case ErrorActions.ADD_ERROR_COMPLETE: {
            return {
                ...state,
                errors: [...state.errors, action.payload]
            }
        }

        case ErrorActions.REMOVE_ERRORS_COMPLETE: {
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
