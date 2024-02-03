import { exec } from "child_process";

function executeCommand(command) {
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

executeCommand(`dir`);
executeCommand(`echo "Hello, Node.js!"`);
