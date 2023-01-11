const {parentPort} = require('worker_threads');

parentPort.on('message',(msg)=>{
    console.log(`Hi! Im Worker and its a msg from main => ${msg}`)
    let startTime = new Date();
    let num = 0;
  
    for (let index = 0; index < 10_000_000_000; index++) {
      num += index;
    }
  
    console.log(
      new Date().getTime() - startTime.getTime()
    );
    process.exit(0)
})
