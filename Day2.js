import fs from "fs";

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err, data) => {
    if (err) {
      console.log("File Does Not Exist");
    } else {
      console.log("Data Written to", filePath);
    }
  });
}

writeToFile("test-files/output1.txt", "Sample content");
writeToFile(
  "test-files/nonexistent-folder/output.txt",
  "Content in a non-existent folder."
);
