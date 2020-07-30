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
import { AddedRoutesBlock } from "./blocks/addedRoutesBlock";
import { DeliveryCostBlock } from "./blocks/deliveryCostBlock";
import { CheapestRoutesBlock } from "./blocks/cheapestRouteBlock";
import { PossibleRoutesBlock } from "./blocks/possibleRoutesBlock";

export const App = (): React.ReactElement => {

    const renderUI = React.useCallback((props: IRouteContainerInjectedProps): React.ReactElement => {
        return (
            <div className="flex-container">
                <div className="flex-item">
                    <AddRouteForm {...props} />
                    <AddedRoutesBlock {...props} />
                </div>
                <div className="flex-item">
                    <div>
                        <DeliveryRouteForm {...props} />
                        <PossibleRoutesBlock {...props} />
                    </div>
                </div>
                <div className="flex-item">
                    <div>
                        <DeliveryCostForm {...props} />
                        <DeliveryCostBlock {...props} />
                    </div>
                    <div>
                        <CheapestRouteForm {...props} />
                        <CheapestRoutesBlock {...props} />
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
