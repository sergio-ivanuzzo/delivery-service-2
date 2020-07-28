import { put } from "redux-saga/effects";

import RouteGraph from "../structures/routeGraph";
import * as ErrorActions from "../actions/errorActions";
import * as RouteActions from "../actions/routeActions";
import {
    IAddRouteAction,
    IGetDeliveryCostAction,
    IGetPossibleRoutesAction,
    IGetCheapestRouteAction,
} from "../actions/routeActions";

const routeGraph = new RouteGraph();

export function* addRouteSaga(action: IAddRouteAction) {
    try {
        const { origin, destination, cost } = action.payload;
        routeGraph.addEdge(origin, destination, cost);

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

export function* getDeliveryCostSaga(action: IGetDeliveryCostAction) {
    try {
        // ...
    } catch (e) {
        // ...
    }
}

export function* getPossibleRoutesSaga(action: IGetPossibleRoutesAction) {
    try {
        // ...
    } catch (e) {
        // ...
    }
}

export function* getCheapestRouteSaga(action: IGetCheapestRouteAction) {
    try {
        // ...
    } catch (e) {
        // ...
    }
}

