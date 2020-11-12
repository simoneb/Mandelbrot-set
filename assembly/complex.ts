export class Complex {
    real: f64;
    imaginary: f64;

    constructor(real: f64, imaginary: f64) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(complex: Complex): void {
        this.real += complex.real;
        this.imaginary += complex.imaginary;
    }

    square(): void {
        /* (a + bi)^2
         * = a^2 + 2abi + (bi)^2
         * = a^2 + 2abi + b^2 * -1
         * = a^2 - b^2 + 2abi
         */
        const real = this.real;
        const imaginary = this.imaginary;

        this.real = real * real - imaginary * imaginary;
        this.imaginary = 2 * real * imaginary;
    }

    copy(): Complex {
        return new Complex(this.real, this.imaginary);
    }

    mandelbrotIteration(c: Complex): void {
        // z = z^2 + c
        this.square();
        this.add(c);
    }

    goesToInfinity(): i8 {
        const temp = this.copy();

        for (let i: u8 = 0; i < 100; i++) {

            temp.mandelbrotIteration(this);

            if (temp.real > 2 || temp.real < -2 || temp.imaginary > 2 || temp.imaginary < -2)
                return i;
                // return the number of iterations if explodes to infinity
        }

        return -1;
    }
}