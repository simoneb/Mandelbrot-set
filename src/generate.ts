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
}

export async function generate() {
    const thread = new Thread();
    await thread.sendWasm();
    console.log(await thread.command("plus1", 100));
}