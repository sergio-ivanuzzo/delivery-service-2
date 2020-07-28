export class NoRouteError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "No Route."
    }
}
