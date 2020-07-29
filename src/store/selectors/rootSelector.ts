import { IStoreState } from "../reducers/rootReducer";

export function rootSelector(state: IStoreState) {
    const { errorReducer, routeReducer } = state;

    return {
        ...errorReducer,
        ...routeReducer
    }
}
