import { ErrorActions } from "../actions/errorActions";

export interface IErrorReducerState {
    errors: string[];
}

const initialState: IErrorReducerState = {
    errors: [],
};

export const errorReducer = (state = initialState, action): IErrorReducerState => {
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
