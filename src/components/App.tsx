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
import { ErrorsBlock } from "./blocks/errorsBlock";
import { CheapestRouteForm } from "./forms/cheapestRouteForm";

export const App = (): React.ReactElement => {

    const renderUI = React.useCallback((props: IRouteContainerInjectedProps): React.ReactElement => {
        return (
            <div className="flex-container">
                <div className="flex-item">
                    <AddRouteForm {...props} />
                </div>
                <div className="flex-item">
                    <div>
                        <DeliveryCostForm {...props} />
                    </div>
                    <div>
                        <DeliveryRouteForm {...props} />
                    </div>
                </div>
                <div className="flex-item">
                    <div>
                        <CheapestRouteForm {...props} />
                    </div>
                </div>
                <div className="flex-item">
                    <div>
                        <ErrorsBlock errors={props.errors} />
                    </div>
                </div>
            </div>
        );
    }, []);

    return (
        <Provider store={store}>
            <RouteContainer>
                {renderUI}
            </RouteContainer>
        </Provider>
    );
};
