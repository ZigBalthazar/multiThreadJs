const {parentPort} = require('worker_threads');

parentPort.on('message',(msg)=>{
    console.log(`Hi! Im Worker and its a msg from main => ${msg}`)
})