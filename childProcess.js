const { fork } = require("child_process");

console.log("this is Main!");

for (let index = 0; index < 15; index++) {
  const child = fork("child.js");
  child.send("message from main")
child.on("message",(msg)=>{
  console.log(msg)
})
}
