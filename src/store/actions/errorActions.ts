export enum ErrorActions {
    ADD_ERROR = "ADD_ERROR",
    REMOVE_ERRORS = "REMOVE_ERRORS"
}

export interface IAddErrorPayload {
    text: string;
    type: string;
    color: string;
    uniqId: string;
}

export interface IRemoveErrorPayload {
    type: string;
}

export function addErrorAction(payload: IAddErrorPayload) {
    return {
        type: ErrorActions.ADD_ERROR,
        payload
    }
}

export function removeErrorAction(payload: IRemoveErrorPayload) {
    return {
        type: ErrorActions.REMOVE_ERRORS,
        payload
    }
}
