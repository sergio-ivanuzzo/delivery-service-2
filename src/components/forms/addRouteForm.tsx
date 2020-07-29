import * as React from "react";
import { shallowEqual } from "react-redux";

import { IAddRoutePayload } from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";
import { ColorText } from "../common/colorText";
import { FormColor } from "../../common/constants";

interface IAddRouteFormProps {
    addRoute: (payload: IAddRoutePayload) => void;
}

interface IAddRouteFormState extends IAddRoutePayload {}

export const AddRouteForm = React.memo((
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

    const firstInputRef = React.useRef<HTMLInputElement>(null);

    const submitCallback: (
        state: IAddRouteFormState
    ) => void = React.useCallback(
        (state) => {
            props.addRoute({...state});
            if (firstInputRef.current) {
                firstInputRef.current.focus();
            }
        },
        []
    );

    const { origin, destination, cost } = state;

    return (
        <div className="form-container">
            <div>
                <ColorText color={FormColor.ADD_ROUTE_FORM}>
                    Add Route Form
                </ColorText>
            </div>
            <form onSubmit={handleSubmit(submitCallback)} autoComplete="off">
                <div>
                    <label htmlFor="origin">Input Route Origin</label>
                    <input
                        type="text"
                        value={origin}
                        id="origin"
                        name="origin"
                        placeholder="Example: A"
                        maxLength={1}
                        ref={firstInputRef}
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
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}, shallowEqual);
