import { all, takeEvery, AllEffect } from "redux-saga/effects";

import { RouteActions } from "../actions/routeActions";
import {
    addRouteSaga,
    getDeliveryCostSaga,
    getPossibleRoutesSaga,
    getCheapestRouteSaga
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
    ]);
}
