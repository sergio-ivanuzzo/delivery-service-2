import { all, takeEvery, AllEffect } from "redux-saga/effects";

import { RouteActions } from "../actions/routeActions";
import { ErrorActions } from "../actions/errorActions";
import {
    addRouteSaga,
    getDeliveryCostSaga,
    getPossibleRoutesSaga,
    getCheapestRouteSaga,
    addErrorSaga
} from "./routeSagas";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(
            RouteActions.ADD_ROUTE_REQUEST,
            addRouteSaga
        ),
        takeEvery(
            RouteActions.GET_DELIVERY_COST_REQUEST,
            getDeliveryCostSaga
        ),
        takeEvery(
            RouteActions.GET_POSSIBLE_ROUTES_REQUEST,
            getPossibleRoutesSaga
        ),
        takeEvery(
            RouteActions.GET_CHEAPEST_ROUTE_REQUEST,
            getCheapestRouteSaga
        ),
        takeEvery(
            ErrorActions.ADD_ERROR_REQUEST,
            addErrorSaga
        ),
    ]);
}
