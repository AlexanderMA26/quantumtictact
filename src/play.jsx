import Graph from './graph';

const g = new Graph;

function createGraph(g){

g.addEdge(0, 1);
g.addEdge(1, 2);
g.printGraph();
}

export default createGraph();
