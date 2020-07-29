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

        yield put(RouteActions.addRouteCompleteAction({
            route: origin + destination
        }));

    } catch (e) {
        yield put(ErrorActions.addRouteErrorAction({
            error: e.toString()
        }));
    }
}

export function* getDeliveryCostSaga(action: IGetDeliveryCostAction) {
    try {

        const { deliveryRoute } = action.payload;

        const cost = routeGraph.getRouteCost(deliveryRoute);

        yield put(RouteActions.getDeliveryCostCompleteAction({
            cost
        }));

    } catch (e) {
        yield put(ErrorActions.addRouteErrorAction({
            error: e.toString()
        }));
    }
}

export function* getPossibleRoutesSaga(action: IGetPossibleRoutesAction) {
    try {
        const {
            origin,
            destination,
            maxStopCount
        } = action.payload;

        const possibleRoutes = routeGraph.getPossibleRoutes(
            origin,
            destination,
            maxStopCount
        );

        yield put(RouteActions.getPossibleRoutesCompleteAction({
            possibleRoutes
        }));

    } catch (e) {
        yield put(ErrorActions.addRouteErrorAction({
            error: e.toString()
        }));
    }
}

export function* getCheapestRouteSaga(action: IGetCheapestRouteAction) {
    try {
        const { possibleRoutes } = action.payload;
        const cheapestRoutes = routeGraph.getCheapestRoutes(possibleRoutes);

        yield put(RouteActions.getCheapestRouteCompleteAction({
            cheapestRoutes
        }));

    } catch (e) {
        yield put(ErrorActions.addRouteErrorAction({
            error: e.toString()
        }));
    }
}

