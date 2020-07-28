export enum ErrorActions {
    ADD_ROUTE_ERROR = "ADD_ROUTE_ERROR",
    NO_POSSIBLE_ROUTES = "NO_POSSIBLE_ROUTES",
}

export interface IErrorPayload {
    error: string;
}

export function addRouteErrorAction(payload: IErrorPayload) {
    return {
        type: ErrorActions.ADD_ROUTE_ERROR,
        payload
    }
}

export function noPossibleRoutesAction(payload: IErrorPayload) {
    return {
        type: ErrorActions.NO_POSSIBLE_ROUTES,
        payload
    }
}
