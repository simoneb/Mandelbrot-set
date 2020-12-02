import { generate, Thread } from "../src/generate";
import { Point } from "../src/point";
//import {describe, test} from "@types/jest";

describe("test", () => {
    test("a", async () => {
        expect(await generate(1, 1, 0.5, new Point(0, 0), false, 50, 2))
            .toStrictEqual(new Uint8ClampedArray([255, 255, 255, 255]));
        Thread.changeNumberOfThreads(0);
    })
});