import * as React from "react";

import { ColorText } from "../common/colorText";
import { ContainerTextColor } from "../../common/constants";
import { Placeholder } from "../common/placeholder";

export interface ICheapestRoutesBlockProps {
    cheapestRoutes: string[];
    cheapestRouteCost: number;
}

export const CheapestRoutesBlock = (
    props: ICheapestRoutesBlockProps
): React.ReactElement => {
    const { cheapestRoutes, cheapestRouteCost } = props;

    const renderErrorItem = (
        route: string,
        index: number
    ): React.ReactElement => {
        return ((<div key={index}>{route}</div>));
    };

    const renderErrorItems = (): React.ReactElement => {
        if (!cheapestRoutes.length) {
            return (<Placeholder />);
        }

        return (
            <>{cheapestRoutes.map(renderErrorItem)}</>
        )
    };

    const renderCostBlock = (): React.ReactElement => {
        if (cheapestRoutes.length) {
            return (
                <div className="text-center">
                    Cheapest Cost: {cheapestRouteCost}
                </div>
            );
        }

        return (<></>);
    };

    return (
        <div className="output-container">
            <div className="title text-center">
                <ColorText color={ContainerTextColor.OUTPUT_CONTAINER}>
                    Cheapest Routes
                </ColorText>
            </div>
            {renderCostBlock()}
            {renderErrorItems()}
        </div>
    );
};
