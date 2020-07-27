import { put } from "redux-saga/effects";

import * as ErrorActions from "../actions/errorActions";
import * as RouteActions from "../actions/routeActions";
import RouteGraph from "../structures/routeGraph";

const routeGraph = new RouteGraph();

export function* addRouteSaga(action) {
    try {
        const { vertex, node, cost } = action.payload;
        routeGraph.addEdge(vertex, node, cost);

        const addedRoutes = Array.from(
            routeGraph.mapCostToRoute.entries()
        ).map((item) => {
            return item.join("");
        });

        yield put(RouteActions.addRouteCompleteAction({
            addedRoutes
        }));

    } catch (e) {
        yield put(ErrorActions.addRouteErrorAction({
            error: e.toString()
        }))
    }
}

export function* getDeliveryCostSaga(action) {
    try {
        // ...
    } catch (e) {
        // ...
    }
}

export function* getPossibleRoutesSaga(action) {
    try {
        // ...
    } catch (e) {
        // ...
    }
}

export function* getCheapestRouteSaga(action) {
    try {
        // ...
    } catch (e) {
        // ...
    }
}

