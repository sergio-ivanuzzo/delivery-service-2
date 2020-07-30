import * as React from "react";
import { shallowEqual } from "react-redux";

import { IAddRoutePayload } from "../../store/actions/routeActions";
import { useFormHook } from "../../hooks/formHook";
import { ColorText } from "../common/colorText";
import { IAddErrorPayload} from "../../store/actions/errorActions";
import { FormColor } from "../../common/constants";
import { ErrorLabel } from "../../common/errors";

interface IAddRouteFormProps {
    addRoute: (payload: IAddRoutePayload) => void;
    addError: (payload: IAddErrorPayload) => void;
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
        state: IAddRouteFormState,
        error?: Error
    ) => void = React.useCallback(
        (state, error) => {
            if (error) {
                props.addError({
                    text: error.toString(),
                    type: ErrorLabel.ADD_ROUTE_ERROR,
                    color: FormColor.ADD_ROUTE_FORM
                })
            } else {
                props.addRoute({...state});
            }

            if (firstInputRef.current) {
                firstInputRef.current.focus();
            }
        },
        []
    );

    const { origin, destination, cost } = state;

    return (
        <div className="form-container">
            <div className="title text-center">
                <ColorText color={FormColor.ADD_ROUTE_FORM}>
                    Add Route Form
                </ColorText>
            </div>
            <form
                onSubmit={handleSubmit(submitCallback)}
                autoComplete="off"
            >
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
                    <label htmlFor="cost">Route Cost</label>
                    <input
                        type="number"
                        value={cost}
                        id="cost"
                        name="cost"
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
}, shallowEqual);
