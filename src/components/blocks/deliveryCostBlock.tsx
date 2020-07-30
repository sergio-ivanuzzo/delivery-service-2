import * as React from "react";

import { ColorText } from "../common/colorText";
import { ContainerTextColor } from "../../common/constants";

export interface IDeliveryCostBlockProps {
    deliveryCost: number;
}

export const DeliveryCostBlock = (
    props: IDeliveryCostBlockProps
): React.ReactElement => {
    return (
        <div className="output-container">
            <div className="title text-center">
                <ColorText color={ContainerTextColor.OUTPUT_CONTAINER}>
                    Delivery Cost Form
                </ColorText>
            </div>
            <div>
                Delivery Cost: {props.deliveryCost}
            </div>
        </div>
    );
};
