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
    });

    afterEach(async () => {
        await Thread.changeNumberOfThreads(0);
        // terminate all threads
    });
});

describe("test the Thread class", () => {
    test("check magic number of returned ArrayBuffer of getWasm", async () => {
        expect(new Uint8Array((await Thread.getWasm()).slice(0, 4)))
            .toStrictEqual(new Uint8Array([0, 97, 115, 109]));
        // Wasm magic number is \0asm
    });

    test("test unknown actions", async () => {
        const thread = new Thread();
        expect(await thread.command("(unknown action)", 0)).toBe(null);
        thread.terminate();
    });

    test("test the changeNumberOfThreads method", async () => {
        await Thread.changeNumberOfThreads(5);
        expect(Thread.all.length).toBe(5);

        await Thread.changeNumberOfThreads(3);
        expect(Thread.all.length).toBe(3);

        await Thread.changeNumberOfThreads(0);
        expect(Thread.all.length).toBe(0);
    });
});