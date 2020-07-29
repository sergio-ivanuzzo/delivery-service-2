import * as React from "react";

import {
    IGetCheapestRoutePayload,
    IGetPossibleRoutesPayload
} from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";

interface IDeliveryRouteFormProps {
    getPossibleRoutes: (payload: IGetPossibleRoutesPayload) => void;
    getCheapestRoute: (payload: IGetCheapestRoutePayload) => void;
}

interface IDeliveryRouteFormState {
    origin: string;
    destination: string;
    maxStopCount: number;
}

export const DeliveryRouteForm = (
    props: IDeliveryRouteFormProps
): React.ReactElement => {

    const initialState: IDeliveryRouteFormState = {
        origin: "",
        destination: "",
        maxStopCount: 0
    };

    const {
        state,
        handleChange,
        handleSubmit
    } = useFormHook(initialState);

    const submitCallback: (
        state: IDeliveryRouteFormState
    ) => void = React.useCallback(
        (state) => props.getPossibleRoutes({...state}),
        []
    );

    const {
        origin,
        destination,
        maxStopCount
    } = state;

    return (
        <form onSubmit={handleSubmit(submitCallback)}>
            <div>
                <label htmlFor="origin">Input Delivery Route Origin</label>
                <input
                    type="text"
                    value={origin}
                    id="origin"
                    name="origin"
                    placeholder="Example: A"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="destination">Input Delivery Route Destination</label>
                <input
                    type="text"
                    value={destination}
                    id="destination"
                    name="destination"
                    placeholder="Example: B"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="maxStopCount">Max Stop Count (optional)</label>
                <input
                    type="number"
                    value={maxStopCount}
                    id="maxStopCount"
                    name="maxStopCount"
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="button">
                    Submit
                </button>
            </div>
        </form>
    );
};
