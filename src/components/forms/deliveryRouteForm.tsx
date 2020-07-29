import * as React from "react";
import { shallowEqual } from "react-redux";

import {
    IGetCheapestRoutePayload,
    IGetPossibleRoutesPayload
} from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";
import { ColorText } from "../common/colorText";
import { FormColor } from "../../common/constants";

interface IDeliveryRouteFormProps {
    getPossibleRoutes: (payload: IGetPossibleRoutesPayload) => void;
    getCheapestRoute: (payload: IGetCheapestRoutePayload) => void;
}

interface IDeliveryRouteFormState {
    origin: string;
    destination: string;
    maxStopCount: number;
}

export const DeliveryRouteForm = React.memo((
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

    const firstInputRef = React.useRef<HTMLInputElement>(null);

    const submitCallback: (
        state: IDeliveryRouteFormState
    ) => void = React.useCallback(
        (state) => {
            props.getPossibleRoutes({...state});
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
            <div>
                <ColorText color={FormColor.DELIVERY_ROUTE_FORM}>
                    Delivery Route Form
                </ColorText>
            </div>
            <form onSubmit={handleSubmit(submitCallback)} autoComplete="off">
                <div>
                    <label htmlFor="origin">Input Delivery Route Origin</label>
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
                    <label htmlFor="destination">Input Delivery Route Destination</label>
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
        </div>
    );
}, shallowEqual);
