import * as React from "react";

import {
    IGetDeliveryCostPayload
} from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";

interface IDeliveryCostFormProps {
    getDeliveryCost: (payload: IGetDeliveryCostPayload) => void;
}

interface IDeliveryCostFormState {
    deliveryRoute: string;
}

export const DeliveryCostForm = (
    props: IDeliveryCostFormProps
): React.ReactElement => {

    const initialState: IDeliveryCostFormState = {
        deliveryRoute: ""
    };

    const {
        state,
        handleChange,
        handleSubmit
    } = useFormHook(initialState);

    const submitCallback: (
        state: IDeliveryCostFormState
    ) => void = React.useCallback(
        (state) => props.getDeliveryCost({...state}),
        []
    );

    const { deliveryRoute } = state;

    return (
        <form onSubmit={handleSubmit(submitCallback)}>
            <div>
                <label htmlFor="deliveryRoute">Input Delivery Route</label>
                <input
                    type="text"
                    value={deliveryRoute}
                    id="deliveryRoute"
                    name="deliveryRoute"
                    placeholder="Example: ABCDE"
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
