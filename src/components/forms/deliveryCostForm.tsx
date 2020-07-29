import * as React from "react";
import { shallowEqual } from "react-redux";

import {
    IGetDeliveryCostPayload
} from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";
import { ColorText } from "../common/colorText";
import { FormColor } from "../../common/constants";

interface IDeliveryCostFormProps {
    getDeliveryCost: (payload: IGetDeliveryCostPayload) => void;
}

interface IDeliveryCostFormState {
    deliveryRoute: string;
}

export const DeliveryCostForm = React.memo((
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

    const firstInputRef = React.useRef<HTMLInputElement>(null);

    const submitCallback: (
        state: IDeliveryCostFormState
    ) => void = React.useCallback(
        (state) => {
            props.getDeliveryCost({...state});
            if (firstInputRef.current) {
                firstInputRef.current.focus();
            }
        },
        []
    );

    const { deliveryRoute } = state;

    return (
        <div className="form-container">
            <div>
                <ColorText color={FormColor.DELIVERY_COST_FORM}>
                    Delivery Cost Form
                </ColorText>
            </div>
            <form onSubmit={handleSubmit(submitCallback)} autoComplete="off">
                <div>
                    <label htmlFor="deliveryRoute">Input Delivery Route</label>
                    <input
                        type="text"
                        value={deliveryRoute}
                        id="deliveryRoute"
                        name="deliveryRoute"
                        placeholder="Example: ABCDE"
                        ref={firstInputRef}
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
