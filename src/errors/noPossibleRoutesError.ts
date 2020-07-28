export class NoPossibleRoutesError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "No routes found for current origin and destination."
    }
}
