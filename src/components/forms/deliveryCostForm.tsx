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
        resetForm
    } = useFormHook(initialState);

    const handleSubmit = (event: React.FormEvent) => React.useCallback(() => {
        event.preventDefault();

        props.getDeliveryCost({
            deliveryRoute: state.deliveryRoute
        });

        resetForm();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="route">Input Delivery Route</label>
                <input
                    type="text"
                    value={state.deliveryRoute}
                    id="route"
                    name="route"
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
