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
        <>
            <DeliveryCostForm {...props} />
            <AddRouteForm {...props} />
            <DeliveryRouteForm {...props} />
        </>
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
