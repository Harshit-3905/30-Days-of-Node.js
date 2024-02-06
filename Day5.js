import path from "path";

function checkFileExtension(filePath, expectedExtension) {
  const extension = path.extname(filePath);
  if (extension === expectedExtension) {
    console.log("File has the expected extension :", extension);
  } else {
    console.log("File does not have the expected extension :", extension);
  }
}

checkFileExtension("test-files/file1.txt", ".txt");
checkFileExtension("test-files/image.png", ".jpg");
