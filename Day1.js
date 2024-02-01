import fs from "fs";

function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error Occured: Cannot Read File \n");
      return;
    }
    console.log("File Content:");
    console.log(data, "\n");
  });
}

readFileContent("./test-files/file1.txt");
readFileContent("./test-files/emptyfile.txt");
readFileContent("./test-files/nonexistent.txt");
