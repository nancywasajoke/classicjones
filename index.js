const { Worker } = require( "worker_threads" );
const thread_count = 4

async function createWorker(i) {
    return new Promise(function (resolve, reject) {
      const worker = new Worker("./runner.js", {
        workerData: { thread_count: i },
      });
      worker.on("error", (msg) => {
        reject(`An error ocurred: ${msg}`);
      });
    });
}

const workerPromises = [];
for (let i = 0; i < thread_count; i++) {
  workerPromises.push(createWorker(i));
}
