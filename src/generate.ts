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
    const thread = new Thread();
    await thread.sendWasm();
    const imageDataArray = await thread.command("generate", [width, height, zoom, offset.x, offset.y, color]);
    thread.terminate();
    return imageDataArray as Uint8ClampedArray;
}