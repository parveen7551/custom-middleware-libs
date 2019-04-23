// spawn a shell by default
// Since the exec function uses a shell to execute the command, 
// we can use the shell syntax directly here making use of the shell pipe feature.
const { exec } = require('child_process');
exec('ls | wc -l', (error, stdout, stderr) => {
  console.log(error);
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
