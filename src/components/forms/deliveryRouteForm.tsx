import * as React from "react";

import {
    IGetDeliveryCostPayload,
    IGetPossibleRoutesPayload
} from "../../store/actions/routeActions";

interface IDeliveryRouteFormProps {
    getDeliveryCost: (payload: IGetDeliveryCostPayload) => void;
    getPossibleRoutes: (payload: IGetPossibleRoutesPayload) => void;
    getCheapestRoute: () => void;
}

interface IDeliveryRouteFormState {
    route: string;
    maxStopCount: number;
}

export const DeliveryRouteForm = (
    props: IDeliveryRouteFormProps
): React.ReactElement => {

    const initialState: IDeliveryRouteFormState = {
        route: "",
        maxStopCount: 0
    };

    const [state, setState] = React.useState(initialState);

    const processSubmit = React.useCallback(() => {
        props.getDeliveryCost({
            deliveryRoute: state.route
        });
        props.getPossibleRoutes({
            deliveryRoute: state.route,
            maxStopCount: state.maxStopCount
        });
        props.getCheapestRoute();

        setState(initialState);
    }, []);

    React.useEffect(() => {
        setState(state);
    }, [state]);

    return (
        <form onSubmit={processSubmit}>
            <div>
                <label htmlFor="route">Input Delivery Route</label>
                <input
                    type="text"
                    value={state.route}
                    id="route"
                    placeholder="Example: ABCDE"
                />
            </div>
            <div>
                <label htmlFor="maxStopCount">Max Stop Count (optional)</label>
                <input
                    type="number"
                    value={state.maxStopCount}
                    id="maxStopCount"
                />
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};
