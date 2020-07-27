import { all, takeEvery, AllEffect } from "redux-saga/effects";

import { RouteActions } from "../actions/routeActions";
import {
    addRouteSaga,
} from "./routeSagas";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(RouteActions.ADD_ROUTE_REQUEST, addRouteSaga),
    ]);
}
