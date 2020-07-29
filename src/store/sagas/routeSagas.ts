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
import {
    FormColor
} from "../../common/constants";
import {
    ErrorLabel
} from "../../common/errors";
import { uniqkey } from "../../helpers/uniqkey";

const routeGraph = new RouteGraph();

interface IErrorData {
    text: string;
    type: string;
    color: string;
}

function* addError(errorData: IErrorData) {
    yield put(
        ErrorActions.addErrorAction({
            ...errorData,
            uniqId: uniqkey()
        })
    );
}

function* removeError(type: string) {
    yield put(ErrorActions.removeErrorAction({
        type
    }));
}

export function* addRouteSaga(action: IAddRouteAction) {
    const errorType = ErrorLabel.ADD_ROUTE_ERROR;
    const errorColor = FormColor.ADD_ROUTE_FORM;

    try {
        const { origin, destination, cost } = action.payload;
        routeGraph.addEdge(origin, destination, cost);

        yield put(RouteActions.addRouteCompleteAction({
            route: origin + destination
        }));

        yield removeError(errorType);

    } catch (e) {
        yield addError({
            text: e.toString(),
            type: errorType,
            color: errorColor
        });
    }
}

export function* getDeliveryCostSaga(action: IGetDeliveryCostAction) {
    const errorType = ErrorLabel.DELIVERY_COST_ERROR;
    const errorColor = FormColor.DELIVERY_COST_FORM;

    try {
        const { deliveryRoute } = action.payload;
        const cost = routeGraph.getRouteCost(deliveryRoute);

        yield put(RouteActions.getDeliveryCostCompleteAction({
            cost
        }));

        yield removeError(errorType);

    } catch (e) {
        yield addError({
            text: e.toString(),
            type: errorType,
            color: errorColor
        });
    }
}

export function* getPossibleRoutesSaga(action: IGetPossibleRoutesAction) {
    const errorType = ErrorLabel.DELIVERY_ROUTE_ERROR;
    const errorColor = FormColor.DELIVERY_ROUTE_FORM;

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

        console.log("=", possibleRoutes);

        yield put(RouteActions.getPossibleRoutesCompleteAction({
            possibleRoutes
        }));

        yield removeError(errorType);

    } catch (e) {
        yield addError({
            text: e.toString(),
            type: errorType,
            color: errorColor
        });
    }
}

export function* getCheapestRouteSaga(action: IGetCheapestRouteAction) {
    const errorType = ErrorLabel.DELIVERY_ROUTE_ERROR;
    const errorColor = FormColor.DELIVERY_ROUTE_FORM;

    try {
        const { possibleRoutes } = action.payload;
        const cheapestRoutes = routeGraph.getCheapestRoutes(possibleRoutes);

        yield put(RouteActions.getCheapestRouteCompleteAction({
            cheapestRoutes
        }));

        yield removeError(errorType);

    } catch (e) {
        yield addError({
            text: e.toString(),
            type: errorType,
            color: errorColor
        });
    }
}

