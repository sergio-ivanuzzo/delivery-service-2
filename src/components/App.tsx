import * as React from "react";
import { Provider } from "react-redux";

import { store } from "../store/store";

import {
    IRouteContainerInjectedProps,
    RouteContainer
} from "../containers/RouteContainer";

import { AddRouteForm } from "./forms/addRouteForm";
import { DeliveryRouteForm } from "./forms/deliveryRouteForm";
import { DeliveryCostForm } from "./forms/deliveryCostForm";

const renderUI = (props: IRouteContainerInjectedProps): React.ReactElement => {
    return (
        <div className="flex-container">
            <div>
                <AddRouteForm {...props} />
            </div>
            <div>
                <div>
                    <DeliveryCostForm {...props} />
                </div>
                <div>
                    <DeliveryRouteForm {...props} />
                </div>
            </div>
        </div>
    );
};

export const App = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <RouteContainer>
                {renderUI}
            </RouteContainer>
        </Provider>
    );
};
