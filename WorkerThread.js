const {Worker,isMainThread } =require('worker_threads');


if (isMainThread) {
    console.log("Main Thread")
    new Worker('./worker.js')
} else {
    
}