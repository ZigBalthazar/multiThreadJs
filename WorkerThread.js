const {Worker,isMainThread } =require('worker_threads');


if (isMainThread) {
    console.log("Main Thread")

    for (let index = 0; index < 15; index++) {
        var newWorker = new Worker('./worker.js')
        newWorker.postMessage("message From Main")
    }

} else {
    console.log("its main thread!!!")
}