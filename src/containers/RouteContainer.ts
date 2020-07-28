import * as React from "react";
import {
    useSelector,
    useDispatch,
    shallowEqual
} from "react-redux";

import { IRouteReducerState } from "../store/reducers/routeReducer";
import {
    IAddRoutePayload,
    IGetCheapestRoutePayload,
    IGetDeliveryCostPayload,
    IGetPossibleRoutesPayload
} from "../store/actions/routeActions";

import * as RouteActions from "../store/actions/routeActions";

export interface IRouteContainerInjectedProps extends IRouteReducerState {
    addRoute: (payload: IAddRoutePayload) => void;
    getDeliveryCost: (payload: IGetDeliveryCostPayload) => void;
    getPossibleRoutes: (payload: IGetPossibleRoutesPayload) => void;
    getCheapestRoute: (payload: IGetCheapestRoutePayload) => void;
}

export interface IRouteContainerProps {
    children: (props: IRouteContainerInjectedProps) => React.ReactElement;
}

const getInjectedProps = (): IRouteContainerInjectedProps => {
    const {
        addedRoutes,
        deliveryCost,
        possibleRoutes,
        cheapestRoute
    } = useSelector(
        (state: IRouteReducerState) => state,
        shallowEqual
    );

    const dispatch = useDispatch();

    return {
        addedRoutes,
        deliveryCost,
        possibleRoutes,
        cheapestRoute,

        addRoute: (payload: IAddRoutePayload) => React.useCallback(
            () => dispatch(RouteActions.addRouteAction(payload)),
            []
        ),
        getDeliveryCost: (payload: IGetDeliveryCostPayload) => React.useCallback(
            () => dispatch(RouteActions.getDeliveryCostAction(payload)),
            []
        ),
        getPossibleRoutes: (payload: IGetPossibleRoutesPayload) => React.useCallback(
            () => dispatch(RouteActions.getPossibleRoutesAction(payload)),
            []
        ),
        getCheapestRoute: (payload: IGetCheapestRoutePayload) => React.useCallback(
            () => dispatch(RouteActions.getCheapestRouteAction(payload)),
            []
        ),
    }
};

export const RouteContainer = React.memo(
    (props: IRouteContainerProps): React.ReactElement => {
        return props.children(getInjectedProps());
    });
