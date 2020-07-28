import * as React from "react";

import {
    IGetDeliveryCostPayload,
    IGetPossibleRoutesPayload
} from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";

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

    const {
        state,
        handleChange,
        resetForm
    } = useFormHook(initialState);

    const handleSubmit = (event: React.FormEvent) => React.useCallback(() => {
        event.preventDefault();

        props.getDeliveryCost({
            deliveryRoute: state.route
        });
        props.getPossibleRoutes({
            deliveryRoute: state.route,
            maxStopCount: state.maxStopCount
        });
        props.getCheapestRoute();

        resetForm();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="route">Input Delivery Route</label>
                <input
                    type="text"
                    value={state.route}
                    id="route"
                    name="route"
                    placeholder="Example: ABCDE"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="maxStopCount">Max Stop Count (optional)</label>
                <input
                    type="number"
                    value={state.maxStopCount}
                    id="maxStopCount"
                    name="maxStopCount"
                    onChange={handleChange}
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
