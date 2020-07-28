import * as React from "react";

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

    const resetForm = React.useCallback(() => setState(initialState), []);

    return {
        state,
        handleChange,
        resetForm
    };
}
