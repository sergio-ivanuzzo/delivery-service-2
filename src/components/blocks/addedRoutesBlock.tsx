import * as React from "react";

import { ColorText } from "../common/colorText";
import { ContainerTextColor } from "../../common/constants";
import { Placeholder } from "../common/placeholder";

export interface IAddedRoutesBlockProps {
    addedRoutes: string[];
}

export const AddedRoutesBlock = (
    props: IAddedRoutesBlockProps
): React.ReactElement => {

    const renderErrorItem = (
        data: string,
        index: number
    ): React.ReactElement => {
        const route = data.slice(0, 2);
        const cost = data.slice(-1);

        return (
            <div key={index} className="flex-container">
                <div className="flex-item">
                    {route}
                </div>
                <div className="flex-item">
                    Cost: {cost}
                </div>
            </div>
        );
    };

    const renderErrorItems = (): React.ReactElement => {
        const { addedRoutes } = props;

        if (!addedRoutes.length) {
            return (<Placeholder />);
        }

        return (
            <>{addedRoutes.map(renderErrorItem)}</>
        )
    };

    return (
        <div className="output-container">
            <div className="title text-center">
                <ColorText color={ContainerTextColor.OUTPUT_CONTAINER}>
                    Added Routes
                </ColorText>
            </div>
            {renderErrorItems()}
        </div>
    );
};
