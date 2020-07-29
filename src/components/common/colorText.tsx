import * as React from "react";

export interface IColorTextProps {
    color: string;
    children: React.ReactNode;
}

export const ColorText = React.memo((props: IColorTextProps): React.ReactElement => {
    return (
        <span style={{color: props.color}}>
            {props.children}
        </span>
    );
});
