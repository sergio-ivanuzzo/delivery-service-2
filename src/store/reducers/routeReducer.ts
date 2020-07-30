import { AnyAction } from "redux";

import { RouteActions } from "../actions/routeActions";

export interface IRouteReducerState {
    addedRoutes: string[];
    deliveryCost: number;
    possibleRoutes: string[];
    cheapestRoutes: string[];
    cheapestRouteCost: number;
}

const initialState: IRouteReducerState = {
    addedRoutes: [],
    deliveryCost: 0,
    possibleRoutes: [],
    cheapestRoutes: [],
    cheapestRouteCost: 0
};

export const routeReducer = (
    state = initialState, action: AnyAction
): IRouteReducerState => {
    switch (action.type) {
        case RouteActions.ADD_ROUTE_COMPLETE: {
            return {
                ...state,
                addedRoutes: [
                    ...state.addedRoutes,
                    action.payload.route
                ]
            }
        }

        case RouteActions.GET_DELIVERY_COST_COMPLETE: {
            return {
                ...state,
                deliveryCost: action.payload.cost
            }
        }

        case RouteActions.GET_POSSIBLE_ROUTES_COMPLETE: {
            return {
                ...state,
                possibleRoutes: action.payload.possibleRoutes
            }
        }

        case RouteActions.GET_CHEAPEST_ROUTE_COMPLETE: {
            return {
                ...state,
                cheapestRoutes: action.payload.cheapestRoutes,
                cheapestRouteCost: action.payload.cheapestRouteCost
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
};
