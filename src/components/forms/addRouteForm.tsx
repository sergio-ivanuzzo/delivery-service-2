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
        resetForm
    } = useFormHook(initialState);

    const handleSubmit = (event: React.FormEvent) => React.useCallback(() => {
        event.preventDefault();

        props.addRoute({...state});

        resetForm();
    }, []);

    const { origin, destination, cost } = state;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="origin">Input Route Origin</label>
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
                <label htmlFor="destination">Input Route Destination</label>
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
