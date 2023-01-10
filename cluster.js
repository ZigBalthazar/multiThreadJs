const cluster = require("cluster");
const CPU = require("os").cpus();
const process = require("process");

if (cluster.isMaster) {
  console.log("CPU Thread => ", CPU.length);
  console.log("Master thread");

  for (let i = 0; i < 5; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker : ${cluster.worker.id}`);

  let startTime = new Date();
  let num = 0;

  for (let index = 0; index < 10_000_000_000; index++) {
    num += index;
  }

  console.log(
    new Date().getTime() - startTime.getTime(),
    ` => ${cluster.worker.id}`
  );

  process.exit(0);
}
