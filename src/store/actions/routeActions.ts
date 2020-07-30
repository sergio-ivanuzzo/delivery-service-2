import { AnyAction } from "redux";

export enum RouteActions {
    ADD_ROUTE_REQUEST = "ADD_ROUTE_REQUEST",
    ADD_ROUTE_COMPLETE = "ADD_ROUTE_COMPLETE",
    GET_DELIVERY_COST_REQUEST = "GET_DELIVERY_COST_REQUEST",
    GET_DELIVERY_COST_COMPLETE = "GET_DELIVERY_COST_COMPLETE",
    GET_POSSIBLE_ROUTES_REQUEST = "GET_POSSIBLE_ROUTES_REQUEST",
    GET_POSSIBLE_ROUTES_COMPLETE = "GET_POSSIBLE_ROUTES_COMPLETE",
    GET_CHEAPEST_ROUTE_REQUEST = "GET_CHEAPEST_ROUTE_REQUEST",
    GET_CHEAPEST_ROUTE_COMPLETE = "GET_CHEAPEST_ROUTE_COMPLETE",
}

export interface IAddRoutePayload {
    origin: string;
    destination: string;
    cost: number;
}

export interface IAddRouteCompletePayload {
    route: string;
}

export interface IAddRouteAction extends AnyAction {
    payload: IAddRoutePayload;
}

export interface IGetDeliveryCostPayload {
    deliveryRoute: string;
}

export interface IGetDeliveryCostCompletePayload {
    cost: number;
}

export interface IGetDeliveryCostAction extends AnyAction {
    payload: IGetDeliveryCostPayload;
}

export interface IGetPossibleRoutesPayload {
    origin: string;
    destination: string;
    maxStopCount: number;
}

export interface IGetPossibleRoutesCompletePayload {
    possibleRoutes: string[];
}

export interface IGetPossibleRoutesAction extends AnyAction {
    payload: IGetPossibleRoutesPayload;
}

export interface IGetCheapestRoutePayload {
    origin: string;
    destination: string;
    maxStopCount: number;
}

export interface IGetCheapestRouteCompletePayload {
    cheapestRoutes: string[];
    cheapestRouteCost: number;
}

export interface IGetCheapestRouteAction extends AnyAction {
    payload: IGetCheapestRoutePayload;
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
        type: RouteActions.GET_DELIVERY_COST_REQUEST,
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
        type: RouteActions.GET_POSSIBLE_ROUTES_REQUEST,
        payload
    }
}

export function getPossibleRoutesCompleteAction(
    payload: IGetPossibleRoutesCompletePayload
) {
    return {
        type: RouteActions.GET_POSSIBLE_ROUTES_COMPLETE,
        payload
    }
}

export function getCheapestRouteAction(payload: IGetCheapestRoutePayload) {
    return {
        type: RouteActions.GET_CHEAPEST_ROUTE_REQUEST,
        payload
    }
}

export function getCheapestRouteCompleteAction(
    payload: IGetCheapestRouteCompletePayload
) {
    return {
        type: RouteActions.GET_CHEAPEST_ROUTE_COMPLETE,
        payload
    }
}
