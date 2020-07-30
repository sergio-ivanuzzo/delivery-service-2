import * as React from "react";

import { ColorText } from "../common/colorText";
import { ContainerTextColor } from "../../common/constants";
import { Placeholder } from "../common/placeholder";

export interface IPossibleRoutesBlockProps {
    possibleRoutes: string[];
}

export const PossibleRoutesBlock = (
    props: IPossibleRoutesBlockProps
): React.ReactElement => {
    const renderErrorItem = (
        route: string,
        index: number
    ): React.ReactElement => {
        return ((<div key={index}>{route}</div>));
    };

    const renderErrorItems = (): React.ReactElement => {
        const { possibleRoutes } = props;

        if (!possibleRoutes.length) {
            return (<Placeholder />);
        }

        return (
            <>{possibleRoutes.map(renderErrorItem)}</>
        )
    };

    return (
        <div className="output-container">
            <div className="title text-center">
                <ColorText color={ContainerTextColor.OUTPUT_CONTAINER}>
                    Possible Routes
                </ColorText>
            </div>
            {renderErrorItems()}
        </div>
    );
};
