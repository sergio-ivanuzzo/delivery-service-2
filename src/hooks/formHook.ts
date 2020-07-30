import * as React from "react";

import { isEqual } from "../helpers/isEqual";
import { EmptyFormError } from "../common/errors";

export function useFormHook<T>(initialState: T) {

    const [state, setState] = React.useState(initialState);

    const handleChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setState((prevState: T) => ({
                ...prevState,
                [name]: value
            }));
        },
        []
    );

    const handleSubmit = (
        callback?: (state: T, error?: Error) => void
    ) => (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        if (callback) {
            if (isEqual(state, initialState)) {
                callback(state, new EmptyFormError());
            } else {
                callback(state);
            }
        }
        setState(initialState);
    };

    return {
        state,
        handleChange,
        handleSubmit
    };
}
