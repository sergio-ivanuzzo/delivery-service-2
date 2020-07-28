import { AnyAction } from "redux";

import { RouteActions } from "../actions/routeActions";

export interface IRouteReducerState {
    addedRoutes: string[];
    deliveryCost: number;
    possibleRoutes: string[];
    cheapestRoute: string;
}

const initialState: IRouteReducerState = {
    addedRoutes: [],
    deliveryCost: 0,
    possibleRoutes: [],
    cheapestRoute: ""
};

export const routeReducer = (
    state = initialState, action: AnyAction
): IRouteReducerState => {
    switch (action.type) {
        case RouteActions.ADD_ROUTE_COMPLETE: {
            return {
                ...state,
                addedRoutes: [...state.addedRoutes, action.payload]
            }
        }

        case RouteActions.GET_DELIVERY_COST_COMPLETE: {
            return {
                ...state,
                deliveryCost: action.payload
            }
        }

        case RouteActions.GET_POSSIBLE_ROUTES_COMPLETE: {
            return {
                ...state,
                possibleRoutes: action.payload
            }
        }

        case RouteActions.GET_CHEAPEST_ROUTE_COMPLETE: {
            return {
                ...state,
                cheapestRoute: action.payload
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
};
