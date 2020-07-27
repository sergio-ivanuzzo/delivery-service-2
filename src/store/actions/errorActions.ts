export enum ErrorActions {
    ADD_ROUTE_ERROR = "ADD_ROUTE_ERROR",
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
