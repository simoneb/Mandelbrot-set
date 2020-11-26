import type { Point } from "./point";

class Thread {
    private static wasm: ArrayBuffer;
    private worker: Worker;

    constructor() {
        this.worker = new Worker("build/worker.js");
    }

    async sendWasm() {
        await this.command("loadWasm", await Thread.getWasm());
    }

    command(action: string, data: any) {
        return new Promise((resolve, reject) => {
            this.worker.onmessage = event => resolve(event.data);
            this.worker.postMessage({ action, data });
        });
    }

    private static async getWasm() {
        if (typeof Thread.wasm === "undefined") {
            const response = await fetch("build/generate.wasm");
            Thread.wasm = await response.arrayBuffer();
        }
        return Thread.wasm;
    }

    terminate() {
        this.worker.terminate();
    }
}

export async function generate(width: number, height: number, zoom: number, offset: Point, color: boolean) {
    const numberOfThreads = navigator.hardwareConcurrency || 1;
    let threads = [];
    let promises = [];
    for (let i = 0; i < numberOfThreads; i++) {
        const thread = new Thread();
        threads.push(thread);
        await thread.sendWasm();
        promises.push(thread.command("generate", [width, height, zoom, offset.x, offset.y, color, numberOfThreads, i]));
    }
    const imageDataArrays: Uint8ClampedArray[] = await Promise.all(promises);
    const imageDataArray = new Uint8ClampedArray(width * height * 4);
    
    for (let i = 0; i < imageDataArrays.length; i++) {
        console.log(imageDataArrays[i].length);
        imageDataArray.set(imageDataArrays[i], imageDataArrays[0].length * i);
        threads[i].terminate();
    }
    return imageDataArray;
}