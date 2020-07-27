export enum RouteActions {
    ADD_ROUTE_REQUEST = "ADD_ROUTE_REQUEST",
    ADD_ROUTE_COMPLETE = "ADD_ROUTE_COMPLETE",
    GET_DELIVERY_COST = "GET_DELIVERY_COST",
    GET_DELIVERY_COST_COMPLETE = "GET_DELIVERY_COST_COMPLETE",
    GET_POSSIBLE_ROUTES = "GET_POSSIBLE_ROUTES",
    GET_POSSIBLE_ROUTES_COMPLETE = "GET_POSSIBLE_ROUTES_COMPLETE",
    GET_CHEAPEST_ROUTE = "GET_CHEAPEST_ROUTE",
    GET_CHEAPEST_ROUTE_COMPLETE = "GET_CHEAPEST_ROUTE_COMPLETE",
}

export interface IAddRoutePayload {
    origin: string;
    destination: string;
    cost: number;
}

export interface IAddRouteCompletePayload {
    addedRoutes: string[];
}

export interface IGetDeliveryCostPayload {
    deliveryRoute: string;
}

export interface IGetDeliveryCostCompletePayload {
    cost: number;
}

export interface IGetPossibleRoutesPayload extends IGetDeliveryCostPayload {
    maxStopCount: number;
}

export interface IGetPossibleRoutesCompletePayload {
    possibleRoutes: string[];
}

export function addRouteAction(payload: IAddRoutePayload) {
    return {
        type: RouteActions.ADD_ROUTE_REQUEST,
        payload
    }
}

export function addRouteCompleteAction(payload: IAddRouteCompletePayload) {
    return {
        type: RouteActions.ADD_ROUTE_COMPLETE,
        payload
    }
}

export function getDeliveryCostAction(
    payload: IGetDeliveryCostPayload
) {
    return {
        type: RouteActions.GET_DELIVERY_COST,
        payload
    }
}

export function getDeliveryCostCompleteAction(
    payload: IGetDeliveryCostCompletePayload
) {
    return {
        type: RouteActions.GET_DELIVERY_COST_COMPLETE,
        payload
    }
}

export function getPossibleRoutesAction(payload: IGetPossibleRoutesPayload) {
    return {
        type: RouteActions.GET_POSSIBLE_ROUTES,
        payload
    }
}

export function getPossibleRoutesCompleteAction(payload) {
    return {
        type: RouteActions.GET_POSSIBLE_ROUTES_COMPLETE,
        payload
    }
}

export function getCheapestRouteAction() {
    return {
        type: RouteActions.GET_CHEAPEST_ROUTE
    }
}

export function getCheapestRouteCompleteAction(payload) {
    return {
        type: RouteActions.GET_CHEAPEST_ROUTE_COMPLETE,
        payload
    }
}
