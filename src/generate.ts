//import Worker from "web-worker";
//import {loadWasm} from "./loadWasm";
import crossPlatform from "./cross-platform";
import type { Point } from "./point";

export class Thread {
    private static wasm: ArrayBuffer;
    private worker: Worker;
    static all: Thread[] = [];

    constructor() {
        this.worker = crossPlatform({
            browser: {
                run: () => new Worker("build/worker.js")
            }, node: {
                require: { Worker: "web-worker" },
                run: required => new required.Worker("public/build/worker.js")
            }
        });
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
            //if(typeof window !== "undefined"){
            //const response = await fetch("build/generate.wasm");
            /*}else{
                import fs = require("fs");
            }*/
            Thread.wasm = await crossPlatform({
                browser: {
                    run: async () => {
                        const response = await fetch("build/generate.wasm");
                        return await response.arrayBuffer();
                    }
                }, node: {
                    require: { fs: "fs" },
                    run: async required => {
                        return required.fs.readFileSync("public/build/generate.wasm");
                    }
                }
            });
            //Thread.wasm = await response.arrayBuffer();
            //Thread.wasm = await loadWasm();
        }
        return Thread.wasm;
    }

    terminate() {
        this.worker.terminate();
    }

    static async changeNumberOfThreads(numberOfThreads: number) {
        while (Thread.all.length != numberOfThreads) {
            if (Thread.all.length < numberOfThreads) {
                const thread = new Thread();
                await thread.sendWasm();
                Thread.all.push(thread);
            } else {
                Thread.all.pop().terminate();
            }
        }
    }
}

export async function generate(
    width: number,
    height: number,
    zoom: number,
    offset: Point,
    color: boolean,
    numberOfIterations: number,
    numberOfThreads: number
) {
    await Thread.changeNumberOfThreads(numberOfThreads);
    let promises = [];
    for (let i = 0; i < Thread.all.length; i++) {
        promises.push(Thread.all[i].command("generate", [
            width, height, zoom, offset.x, offset.y, color, numberOfIterations, numberOfThreads, i
        ]));
    }
    const imageDataArrays: Uint8ClampedArray[] = await Promise.all(promises);
    const imageDataArray = new Uint8ClampedArray(width * height * 4);

    for (let i = 0; i < imageDataArrays.length; i++) {
        console.log(imageDataArrays[i].length);
        imageDataArray.set(imageDataArrays[i], imageDataArrays[0].length * i);
    }
    return imageDataArray;
}