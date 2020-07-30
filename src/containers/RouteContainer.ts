import * as React from "react";
import {
    useSelector,
    useDispatch,
    shallowEqual
} from "react-redux";

import {
    IAddRoutePayload,
    IGetCheapestRoutePayload,
    IGetDeliveryCostPayload,
    IGetPossibleRoutesPayload
} from "../store/actions/routeActions";

import * as RouteActions from "../store/actions/routeActions";
import * as ErrorActions from "../store/actions/errorActions";
import { rootSelector } from "../store/selectors/rootSelector";
import { IRouteReducerState } from "../store/reducers/routeReducer";
import { IErrorReducerState } from "../store/reducers/errorReducer";
import { IAddErrorPayload } from "../store/actions/errorActions";

type StateProps = IRouteReducerState & IErrorReducerState;

export interface IRouteContainerInjectedProps extends StateProps {
    addRoute: (payload: IAddRoutePayload) => void;
    getDeliveryCost: (payload: IGetDeliveryCostPayload) => void;
    getPossibleRoutes: (payload: IGetPossibleRoutesPayload) => void;
    getCheapestRoute: (payload: IGetCheapestRoutePayload) => void;
    addError: (payload: IAddErrorPayload) => void;
}

export interface IRouteContainerProps {
    children: (props: IRouteContainerInjectedProps) => React.ReactElement;
}

export const RouteContainer = React.memo(
    (props: IRouteContainerProps): React.ReactElement => {
        const getInjectedProps = (): IRouteContainerInjectedProps => {
            const {
                addedRoutes,
                deliveryCost,
                possibleRoutes,
                cheapestRoutes,
                cheapestRouteCost,
                errors
            } = useSelector(rootSelector, shallowEqual);

            const dispatch = useDispatch();

            return {
                addedRoutes,
                deliveryCost,
                possibleRoutes,
                cheapestRoutes,
                cheapestRouteCost,
                errors,

                addRoute: (
                    payload: IAddRoutePayload
                ) => dispatch(RouteActions.addRouteAction(payload)),
                getDeliveryCost: (
                    payload: IGetDeliveryCostPayload
                ) => dispatch(RouteActions.getDeliveryCostAction(payload)),
                getPossibleRoutes: (
                    payload: IGetPossibleRoutesPayload
                ) => dispatch(RouteActions.getPossibleRoutesAction(payload)),
                getCheapestRoute: (
                    payload: IGetCheapestRoutePayload
                ) => dispatch(RouteActions.getCheapestRouteAction(payload)),
                addError: (
                    payload: IAddErrorPayload
                ) => dispatch(ErrorActions.addErrorAction(payload))
            }
        };

        return props.children(getInjectedProps());
    });
