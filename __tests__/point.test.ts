import { Point } from "../src/point";

describe("test the copy method", () => {
    test("copy of (1, 2)", () => {
        const point = new Point(1, 2);
        expect(point.copy()).toStrictEqual(point);
    });

    test("copy of (-4.7, 8.25)", () => {
        const point = new Point(-4.7, 8.25);
        expect(point.copy()).toStrictEqual(point);
    });
});