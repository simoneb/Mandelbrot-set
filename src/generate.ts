export function generate(){
    const worker = new Worker("build/worker.js");
    worker.onmessage = event => console.log(event.data);
    worker.postMessage(100);
}