import path from "path";

function resolvePath(relativePath) {
  return path.resolve(relativePath);
}

console.log(resolvePath("test-files/file1.txt"));
console.log(resolvePath("test-files/emptyfile.txt"));
