const {Worker,isMainThread } =require('worker_threads');


if (isMainThread) {
    console.log("Main Thread")
    const newWorker = new Worker('./worker.js').postMessage("message From Main")
} else {
    console.log("its main thread!!!")
}