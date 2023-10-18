function sumOfDistancesInTree(n, tree) {
  // validation
  if (!(1 <= n && n <= 3 * 104) || !(tree.length === n - 1)) {
    return null
  }
  // Create an adjacency list to represent the tree.
  const adjacencyList = new Array(n).fill(null).map(() => []);
  
  for (const [u, v] of tree) {
    if (v === undefined || !(u >= 0 && v <n) || !(u !== v)) {
      return null
    }
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }
  
  // Create an array to store the number of nodes in the subtree rooted at each node.
  const subTreeCount = new Array(n).fill(1);
  
  // Create an array to store the sum of distances for each node.
  const sumOfDistances = new Array(n).fill(0);
  
  function dfs(node, parent) {
    for (const child of adjacencyList[node]) {
      if (child !== parent) {
        dfs(child, node);
        subTreeCount[node] += subTreeCount[child];
        sumOfDistances[node] += sumOfDistances[child] + subTreeCount[child];
      }
    }
  }
  
  function dfs2(node, parent) {
    for (const child of adjacencyList[node]) {
      if (child !== parent) {
        sumOfDistances[child] = sumOfDistances[node] - subTreeCount[child] + n - subTreeCount[child];
        dfs2(child, node);
      }
    }
  }
  
  // Start the first DFS from the root (node 0).
  dfs(0, -1);
  
  // Start the second DFS to calculate the distances for all nodes.
  dfs2(0, -1);
  
  return sumOfDistances;
}

// Test case
const length = 6;
const trees = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]];
const distances = sumOfDistancesInTree(length, trees);
if (distances) {
  console.log(distances); // Output: [8, 12, 6, 10, 10, 10]
} else  {
  console.log("Invalid input...");
}
