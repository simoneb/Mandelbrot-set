import { Complex } from "../complex";

describe("test the add method", () => {
    test("3 + 4i  +  5 + 8i", () => {
        const complex = new Complex(3, 4);
        complex.add(new Complex(5, 8));
        expect(complex).toStrictEqual(new Complex(8, 12));
    });

    test("12 + 9i  +  7 + 22i", () => {
        const complex = new Complex(12, 9);
        complex.add(new Complex(7, 22));
        expect(complex).toStrictEqual(new Complex(19, 31));
    });

    test("3.4 + 6.7i  +  2.1 + 9.9i", () => {
        const complex = new Complex(3.4, 6.7);
        complex.add(new Complex(2.1, 9.9))
        expect(complex).toStrictEqual(new Complex(5.5, 16.6));
    })
});

function complexToBeCloseTo(actual: Complex, expected: Complex): void {
    expect(actual.real).toBeCloseTo(expected.real);
    expect(actual.imaginary).toBeCloseTo(expected.imaginary);
}
describe("test the square method", () => {
    test("(2 + 2i)^2", () => {
        const complex = new Complex(2, 2);
        complex.square();
        expect(complex).toStrictEqual(new Complex(0, 8));
    });

    test("(8.1 + 5.3i)^2", () => {
        const complex = new Complex(8.1, 5.3);
        complex.square();
        complexToBeCloseTo(complex, new Complex(37.52, 85.86));
    });
});

describe("test the copy method", () => {
    test("copy of 3 + 7i", () => {
        const complex = new Complex(3, 7);
        expect(complex.copy()).toStrictEqual(complex);
    });

    test("copy of -3 - 7i", () => {
        const complex = new Complex(-3, -7);
        expect(complex.copy()).toStrictEqual(complex);
    });
});

describe("test the mandelbrotIteration method", () => {
    test("iteration of 1 - i", () => {
        const complex = new Complex(1, -1);
        complex.mandelbrotIteration(new Complex(1, -1));
        expect(complex).toStrictEqual(new Complex(1, -3));
    });

    test("iteration of -0.5 + 0i", () => {
        const complex = new Complex(-0.5, 0);
        complex.mandelbrotIteration(new Complex(-0.5, 0));
        expect(complex).toStrictEqual(new Complex(-0.25, 0));
    });
});

describe("test of goesToInfinity method", () => {
    test("-0.5 + 0i doesn't go to infinity", () => {
        const complex = new Complex(-0.5, 0);
        expect(complex.goesToInfinity(100)).toBe(-1);
    });

    test("0.5 + 0.25i goes to infinity after 3 iterations", () => {
        const complex = new Complex(0.5, 0.25);
        expect(complex.goesToInfinity(100)).toBe(3);
    });

    test("0.251 + 0i goes to infinity after 95 iterations", () => {
        const complex = new Complex(0.251, 0);
        expect(complex.goesToInfinity(100)).toBe(95);
    });
});