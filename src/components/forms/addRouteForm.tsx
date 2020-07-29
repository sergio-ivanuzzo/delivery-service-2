import * as React from "react";

import { IAddRoutePayload } from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";

interface IAddRouteFormProps {
    addRoute: (payload: IAddRoutePayload) => void;
}

interface IAddRouteFormState extends IAddRoutePayload {}

export const AddRouteForm = (
    props: IAddRouteFormProps
): React.ReactElement => {

    const initialState: IAddRouteFormState = {
        origin: "",
        destination: "",
        cost: 0
    };

    const {
        state,
        handleChange,
        handleSubmit
    } = useFormHook(initialState);

    const submitCallback: (
        state: IAddRouteFormState
    ) => void = React.useCallback(
        (state) => {
            props.addRoute({...state})
        },
        []
    );

    const { origin, destination, cost } = state;

    return (
        <form onSubmit={handleSubmit(submitCallback)}>
            <div>
                <label htmlFor="origin">Input Route Origin</label>
                <input
                    type="text"
                    value={origin}
                    id="origin"
                    name="origin"
                    placeholder="Example: A"
                    maxLength={1}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="destination">Input Route Destination</label>
                <input
                    type="text"
                    value={destination}
                    id="destination"
                    name="destination"
                    placeholder="Example: B"
                    maxLength={1}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cost">Input Route Cost</label>
                <input
                    type="number"
                    value={cost}
                    id="cost"
                    name="cost"
                    placeholder="Example: 5"
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
