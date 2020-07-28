export class IncorrectNodeError extends Error {
    constructor(message: string = "") {
        super(message);
        this.message = "Origin or destination does not exist."
    }
}
