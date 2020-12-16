import { GPU, IKernelFunctionThis, IKernelRunShortcut } from "gpu.js";
import type { Point } from "./point";
import { goesToInfinity } from "./gpu-complex";
import { hue2rgb } from "./gpu-hue2rgb";

const gpu = new GPU();

function generate(
    this: IKernelFunctionThis,
    width: number,
    height: number,
    zoom: number,
    offsetX: number,
    offsetY: number,
    color: boolean,
    numberOfIterations: number
) {
    return [255, 255, 255, 255];
}

let generateKernel: IKernelRunShortcut;
let dimensions = [0, 0];

export function gpuGenerate(
    width: number,
    height: number,
    zoom: number,
    offset: Point,
    color: boolean,
    numberOfIterations: number
) {
    if (width !== dimensions[0] || height !== dimensions[1]) {
        dimensions = [width, height];
        generateKernel = gpu.createKernel(generate).setOutput(dimensions);
    }
    // update the generateKernel kernel if the dimensions have changed

    const pixelArray = generateKernel(
        width, height, zoom, offset.x, offset.y, color, numberOfIterations
    ) as Float32Array[][];

    const imageDataArray = new Uint8ClampedArray(width * height * 4);
    for (let i = 0; i < pixelArray.length; i++)
        for (let j = 0; j < pixelArray[i].length; j++)
            for (let k = 0; k < 4; k++)
                imageDataArray[(i % pixelArray[i].length + j * pixelArray.length) * 4 + k] = pixelArray[i][j][k];

    return imageDataArray;
}