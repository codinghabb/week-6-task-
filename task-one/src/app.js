import FileTree from "./fileTree";
 
export function createFileTree(input) {
  const fileTree = new FileTree();
 
  // Sort input nodes by ascending order of id.
  // This ensures the parent node for a child node can be found while looping.
  const ascendingSortedInput = input
    .slice(0, 1)
    .concat(input.slice(1).toSorted((a, b) => a.id - b.id));
 
  for (const inputNode of ascendingSortedInput) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;
 
    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }
 
  return fileTree;
}
 