import * as React from "react";

import { IAddErrorPayload } from "../../store/actions/errorActions";
import { ColorText } from "../common/colorText";

export interface IErrorsBlockProps {
    errors: IAddErrorPayload[];
}

const ErrorItem = React.memo((item: IAddErrorPayload): React.ReactElement => {
    const { text, color, type } = item;

    return (
        <div className="alert">
            <div className="alert-title">
                <ColorText color={color}>
                    {type}
                </ColorText>
            </div>
            <div className="alert-text">
                {text}
            </div>
        </div>
    );
});

export const ErrorsBlock = (props: IErrorsBlockProps): any => {

    const renderErrorItem = (
        errorData: IAddErrorPayload
    ): React.ReactElement => {
        return (<ErrorItem key={errorData.uniqId} {...errorData} />);
    };

    return (
        <div className="errors-container">
            {props.errors.map(renderErrorItem)}
        </div>
    );
};
