import * as React from "react";

import { useFormHook} from "../../hooks/formHook";
import {
    IGetCheapestRoutePayload,
    IGetPossibleRoutesPayload
} from "../../store/actions/routeActions";
import { ColorText } from "../common/colorText";
import { FormColor } from "../../common/constants";
import { ErrorLabel } from "../../common/errors";
import { IAddErrorPayload } from "../../store/actions/errorActions";

interface ICheapestRouteFormProps {
    possibleRoutes: string[];
    getPossibleRoutes: (payload: IGetPossibleRoutesPayload) => void;
    getCheapestRoute: (payload: IGetCheapestRoutePayload) => void;
    addError: (payload: IAddErrorPayload) => void;
}

interface ICheapestRouteFormState {
    origin: string;
    destination: string;
    maxStopCount: number;
}

export const CheapestRouteForm = (
    props: ICheapestRouteFormProps
): React.ReactElement => {
    const initialState: ICheapestRouteFormState = {
        origin: "",
        destination: "",
        maxStopCount: 0
    };

    const {
        state,
        handleChange,
        handleSubmit
    } = useFormHook(initialState);

    const firstInputRef = React.useRef<HTMLInputElement>(null);

    const submitCallback: (
        state: ICheapestRouteFormState,
        error?: Error
    ) => void = React.useCallback(
        (state, error) => {
            if (error) {
                props.addError({
                    text: error.toString(),
                    type: ErrorLabel.CHEAPEST_ROUTE_ERROR,
                    color: FormColor.CHEAPEST_ROUTE_FORM
                })
            } else {
                props.getCheapestRoute({...state});
            }

            if (firstInputRef.current) {
                firstInputRef.current.focus();
            }
        },
        []
    );

    const {
        origin,
        destination,
        maxStopCount
    } = state;

    return (
        <div className="form-container">
            <div className="title text-center">
                <ColorText color={FormColor.CHEAPEST_ROUTE_FORM}>
                    Cheapest Route Form
                </ColorText>
            </div>
            <form onSubmit={handleSubmit(submitCallback)} autoComplete="off">
                <div>
                    <label htmlFor="origin">Origin</label>
                    <input
                        type="text"
                        value={origin}
                        id="origin"
                        name="origin"
                        placeholder="Example: A"
                        maxLength={1}
                        ref={firstInputRef}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="destination">Destination</label>
                    <input
                        type="text"
                        value={destination}
                        id="destination"
                        name="destination"
                        placeholder="Example: B"
                        maxLength={1}
                        onChange={handleChange}
                        required
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
                <div className="text-right">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
