import { GPU, GPUFunction, IKernelFunctionThis, IKernelRunShortcut, ThreadKernelVariable } from "gpu.js";
import type { Point } from "./point";
import { add, copy, goesToInfinity, mandelbrotIteration, square } from "./gpu-complex";
import { min3, f, hue2rgb } from "./gpu-hue2rgb";

const gpu = new GPU();

function generate(
    this: IKernelFunctionThis,
    width: number,
    height: number,
    horizontalRange: number[],
    verticalRange: number[],
    color: boolean,
    numberOfIterations: number
) {
    const x = horizontalRange[0] + this.thread.y
        * (horizontalRange[1] - horizontalRange[0]) / width;
    const y = verticalRange[0] + (height - this.thread.x)
        * (verticalRange[1] - verticalRange[0]) / height;

    const complex = [x, y];
    
    const iterations = goesToInfinity(complex, numberOfIterations);
    if (iterations === -1) {
        return [0, 0, 0, 255];
    } else {
        if (color) {
            return hue2rgb(iterations / numberOfIterations * 300);
        } else {
            return [255, 255, 255, 255];
        }
    }
}

type KernelFunction = GPUFunction<ThreadKernelVariable[], {}>;

gpu.addFunction(add as KernelFunction);
gpu.addFunction(square as KernelFunction);
gpu.addFunction(copy);
gpu.addFunction(mandelbrotIteration as KernelFunction);
gpu.addFunction(goesToInfinity);
gpu.addFunction(min3);
gpu.addFunction(f);
gpu.addFunction(hue2rgb);

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

    const horizontalRange = [-0.5 / zoom + offset.x, 0.5 / zoom + offset.x];
    const verticalRange = [-0.5 / zoom + offset.y, 0.5 / zoom + offset.y];

    const pixelArray = generateKernel(
        width, height, horizontalRange, verticalRange, color, numberOfIterations
    ) as Float32Array[][];

    const imageDataArray = new Uint8ClampedArray(width * height * 4);
    for (let i = 0; i < pixelArray.length; i++)
        for (let j = 0; j < pixelArray[i].length; j++)
            for (let k = 0; k < 4; k++)
                imageDataArray[(i % pixelArray[i].length + j * pixelArray.length) * 4 + k] = pixelArray[i][j][k];

    return imageDataArray;
}