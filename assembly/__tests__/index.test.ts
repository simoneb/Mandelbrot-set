import { generate } from "..";

function u8caFromArray(array: u8[]): Uint8ClampedArray {
    const u8ca = new Uint8ClampedArray(array.length);
    for (let i = 0; i < array.length; i++)
        u8ca[i] = array[i];
    return u8ca;
}

describe("test the output of generate", () => {
    test("at point (0, 0) without color", () => {
        expect(generate(1, 1, 0.5, 0, 0, false, 50, 1, 0))
            .toStrictEqual(u8caFromArray([255, 255, 255, 255]));
    });

    test("around (0, 0) with color, thread 0", () => {
        expect(generate(2, 2, 0.5, 0, 0, true, 50, 2, 0))
            .toStrictEqual(u8caFromArray([
                255, 25, 0, 255,
                0, 0, 0, 255
            ]));
    });

    test("around (0, 0) with color, thread 1", () => {
        expect(generate(2, 2, 0.5, 0, 0, true, 50, 2, 1))
            .toStrictEqual(u8caFromArray([
                0, 0, 0, 255,
                0, 0, 0, 255
            ]));
    });

    test("at point (0.4, -0.3) with color", () => {
        expect(generate(1, 1, 20, 0.4, -0.3, true, 50, 1, 0))
            .toStrictEqual(u8caFromArray([0, 229, 255, 255]));
    });
});