import {AnyAction} from "redux";

export enum ErrorActions {
    ADD_ERROR_REQUEST = "ADD_ERROR_REQUEST",
    ADD_ERROR_COMPLETE = "ADD_ERROR_COMPLETE",
    REMOVE_ERRORS_COMPLETE = "REMOVE_ERRORS_COMPLETE"
}

export interface IAddErrorPayload {
    text: string;
    type: string;
    color: string;
}

export interface IAddErrorCompletePayload extends IAddErrorPayload {
    uniqId: string;
}

export interface IRemoveErrorPayload {
    type: string;
}

export interface IAddErrorAction extends AnyAction {
    payload: IAddErrorPayload;
}

export function addErrorAction(payload: IAddErrorPayload) {
    return {
        type: ErrorActions.ADD_ERROR_REQUEST,
        payload
    }
}


export function addErrorCompleteAction(payload: IAddErrorCompletePayload) {
    return {
        type: ErrorActions.ADD_ERROR_COMPLETE,
        payload
    }
}

export function removeErrorAction(payload: IRemoveErrorPayload) {
    return {
        type: ErrorActions.REMOVE_ERRORS_COMPLETE,
        payload
    }
}
