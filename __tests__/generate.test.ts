import { generate, Thread } from "../src/generate";
import { Point } from "../src/point";

describe("test the output of the generate function", () => {
    test("at point (0, 0) without color", async () => {
        expect(await generate(1, 1, 0.5, new Point(0, 0), false, 50, 1))
            .toStrictEqual(new Uint8ClampedArray([255, 255, 255, 255]));
    });

    test("around (0, 0) with color", async () => {
        expect(await generate(2, 2, 0.5, new Point(0, 0), true, 50, 2))
            .toStrictEqual(new Uint8ClampedArray([
                255, 25, 0, 255,
                0, 0, 0, 255,
                0, 0, 0, 255,
                0, 0, 0, 255
            ]));
    });

    test("at point (0.4, -0.3) with color", async () => {
        expect(await generate(1, 1, 20, new Point(0.4, -0.3), true, 50, 1))
            .toStrictEqual(new Uint8ClampedArray([0, 229, 255, 255]));
    })

    afterEach(() => {
        Thread.changeNumberOfThreads(0);
        // terminate all threads
    })
});