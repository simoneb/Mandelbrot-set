import { Complex } from './complex';
import { hue2rgb } from './hue2rgb';

export declare function print(num: f64): void;

class Range {
    min: f64;
    max: f64;
    constructor(min: f64, max: f64) {
        this.min = min;
        this.max = max;
    }
    difference(): f64 {
        return this.max - this.min;
    }
}

export function generate(width: u32, height: u32, zoom: f64, offsetX: f64, offsetY: f64, color: boolean, numberOfThreads: u8, threadNumber: u8): Uint8ClampedArray {

    const horizontalRange = new Range(-0.5 / zoom + offsetX, 0.5 / zoom + offsetX);
    const verticalRange = new Range(-0.5 / zoom + offsetY, 0.5 / zoom + offsetY);

    let minHeight: u32 = Math.ceil(height / numberOfThreads) * threadNumber as u32;
    let maxHeight: u32;
    if (threadNumber + 1 < numberOfThreads) {
        // not the last thread
        maxHeight = Math.ceil(height / numberOfThreads) * (threadNumber + 1) as u32;
    } else {
        //the last thread
        maxHeight = height;
    }

    let heightDifference = maxHeight - minHeight;

    const imageDataArray = new Uint8ClampedArray(width * heightDifference * 4);

    for (let i: u32 = minHeight; i < maxHeight; i++) {
        let y: f64 = verticalRange.min + (height - i) * verticalRange.difference() / height;

        for (let j: u32 = 0; j < width; j++) {
            let x: f64 = horizontalRange.min + j * horizontalRange.difference() / width;

            const complex = new Complex(x, y);
            const index: u32 = ((i - minHeight) * width + j) * 4;

            const iterations = complex.goesToInfinity();
            if (iterations === -1) {
                imageDataArray[index] = 0;
                imageDataArray[index + 1] = 0;
                imageDataArray[index + 2] = 0;
            } else {
                let rgb: u8[];
                if (color)
                    rgb = hue2rgb(Math.fround(iterations as f64 / 100 * 300));
                else
                    rgb = [255, 255, 255];
                imageDataArray[index] = rgb[0];
                imageDataArray[index + 1] = rgb[1];
                imageDataArray[index + 2] = rgb[2];
            }
            imageDataArray[index + 3] = 255;
            // a pixel in a canvas has 4 bytes for Red, Green, Blue and Alpha
        }
    }
    return imageDataArray;
}