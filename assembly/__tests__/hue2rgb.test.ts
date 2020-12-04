import { min3, hue2rgb } from "../hue2rgb";

describe("test the output of min3", () => {
    test("3, 4.7 and 2.1", () => {
        expect(min3(3, 4.7, 2.1)).toBe(2.1);
    });

    test("27, 31 and -23.245", () => {
        expect(min3(27, 31, -23.245)).toBe(-23.245);
    });
});

describe("test the output of hue2rgb", () => {
    test("0deg gives rgb(255, 0, 0)", () => {
        expect(hue2rgb(0)).toStrictEqual([255, 0, 0]);
    });

    test("115deg gives rgb(21, 255, 0)", () => {
        expect(hue2rgb(115)).toStrictEqual([21, 255, 0]);
    });

    test("320.86deg gives rgb()", () => {
        expect(hue2rgb(320.86)).toStrictEqual([255, 0, 166]);
    });
});