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
        if (adjacentNodes) {
            if (!adjacentNodes.includes(node)) {
                adjacentNodes.push(node);
            }
        }

        this.mapCostToRoute.set(vertex + node, cost);
    }

    getRouteCost(route: string) {
        let totalCost = 0;
        let noRoute = false;

        for (let i = 0; i < route.length - 1; i++) {
            const startPoint = route[i];
            const endPoint = route[i + 1];

            const cost = this.mapCostToRoute.get(startPoint + endPoint);

            if (cost) {
                totalCost += Number(cost);
            } else {
                noRoute = true;
                break;
            }
        }

        return {
            cost: totalCost,
            noRoute
        }
    }

    getPossibleRoutes(origin: string, destination: string, maxStopCount: number) {
        const routes: Array<string> = [];
        let route: Array<string> = [];

        const visited = new Map<string, boolean>();
        Array.from(this.adgencyList.keys()).forEach((vertex: string) => {
            visited.set(vertex, false);
        });

        const findRoute = (vertex: string, stopCount: number) => {

            visited.set(vertex, true);
            route.push(vertex);

            if (vertex === destination) {
                routes.push(route.join("-"));
            } else {
                const nodes = this.adgencyList.get(vertex);
                if (!nodes) {
                    return routes;
                }

                if (maxStopCount && stopCount < maxStopCount || !maxStopCount) {
                    nodes.forEach((node) => {
                        if (!visited.get(node)) {
                            findRoute(node, stopCount + 1);
                        }
                    });
                }
            }

            route.pop();
            visited.set(vertex, false);

            return routes;
        };

        return findRoute(origin, 0);
    }

    getCheapestRoutes(possibleRoutes: string[]): string[] {
        const routesCost: {[route: string]: number} = {};

        possibleRoutes.forEach((route) => {
            const { cost } = this.getRouteCost(route);
            routesCost[route] = cost;
        });

        const minCost = Math.min(...Object.values(routesCost));

        return Object.keys(routesCost).filter(
            (route: string) => routesCost[route] === minCost
        );
    }

    protected setVertex(vertex: string) {
        if (!this.adgencyList.has(vertex)) {
            this.adgencyList.set(vertex, []);
        }
    }
}
