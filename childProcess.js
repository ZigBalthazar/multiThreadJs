const {fork} = require('child_process');

console.log("this is Main!")
const child = fork("child.js")
