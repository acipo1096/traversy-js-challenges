class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    this.adjacenyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1].push(vertex2);
    this.adjacenyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacenyList[vertex].length) {
      const adjacentVertex = this.adjacenyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacenyList[vertex];
  }

  printAdjacencyList() {
    for (const vertex in this.adjacenyList) {
      console.log(`${vertex} -> ${this.adjacenyList[vertex].join(",")}`);
    }
  }
}

// Example Adjacency List
// {
//   'A': ['B', 'C'],
//   'B': ['A', 'D'],
//   'C': ['A', 'D'],
//   'D': ['B', 'C']
// };

module.exports = Graph;
