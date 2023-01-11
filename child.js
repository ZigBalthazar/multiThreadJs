
process.on("message",(msg)=>{
  console.log(msg)
})

let startTime = new Date();
console.log("child!!")

let num = 0;

for (let index = 0; index < 10_000_000_000; index++) {
  num += index;
}

console.log(
  new Date().getTime() - startTime.getTime()
);