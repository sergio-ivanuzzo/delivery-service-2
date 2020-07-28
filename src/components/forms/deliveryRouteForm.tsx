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
        resetForm
    } = useFormHook(initialState);

    const handleSubmit = (event: React.FormEvent) => React.useCallback(() => {
        event.preventDefault();

        props.getPossibleRoutes({...state});

        resetForm();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="route">Input Delivery Route Origin</label>
                <input
                    type="text"
                    value={state.origin}
                    id="route"
                    name="route"
                    placeholder="Example: A"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="destination">Input Delivery Route Destination</label>
                <input
                    type="text"
                    value={state.destination}
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
