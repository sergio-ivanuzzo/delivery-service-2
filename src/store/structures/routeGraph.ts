export default class RouteGraph {

    adgencyList: Map<string, Array<string>>;

    mapCostToRoute: Map<string, number>;

    constructor() {
        this.adgencyList = new Map();
        this.mapCostToRoute = new Map();
    }

    addEdge(vertex: string, node: string, cost: number) {
        this.setVertex(vertex);
        this.setVertex(node);

        const adjacentNodes = this.adgencyList.get(vertex);
        if (!adjacentNodes.includes(node)) {
            adjacentNodes.push(node);
        }

        this.mapCostToRoute.set(vertex + node, cost);
    }

    protected setVertex(vertex: string) {
        if (!this.adgencyList.has(vertex)) {
            this.adgencyList.set(vertex, []);
        }
    }
}
