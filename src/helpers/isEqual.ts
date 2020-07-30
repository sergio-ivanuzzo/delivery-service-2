export function isEqual(first: Object, second: Object): boolean {
    return JSON.stringify(first) === JSON.stringify(second);
}
