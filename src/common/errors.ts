export enum ErrorLabel {
    ADD_ROUTE_ERROR = "Add Route Error",
    DELIVERY_COST_ERROR = "Delivery Cost Error",
    DELIVERY_ROUTE_ERROR = "Delivery Route Error",
    CHEAPEST_ROUTE_ERROR = "Cheapest Route Error"
}

export class DuplicatedRouteError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "Route already exists.";
    }
}

export class IncorrectNodeError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "Origin or destination does not exist."
    }
}

export class NoPossibleRoutesError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "No routes found for current origin and destination."
    }
}

export class NoRouteError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "No Such Route."
    }
}

export class EmptyFormError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "Form is empty."
    }
}


