type Complex = number[];

export function add(myself: Complex, complex: Complex) {
    myself[0] += complex[0];
    myself[1] += complex[1];
}

export function square(myself: Complex) {
    /* (a + bi)^2
         * = a^2 + 2abi + (bi)^2
         * = a^2 + 2abi + b^2 * -1
         * = a^2 - b^2 + 2abi
         */
    const real = myself[0];
    const imaginary = myself[1];

    myself[0] = real * real - imaginary * imaginary;
    myself[1] = 2 * real * imaginary;
}

export function copy(myself: Complex): Complex {
    return [myself[0], myself[1]];
}

export function mandelbrotIteration(myself: Complex, c: Complex) {
    square(myself);
    add(myself, c);
}

export function goesToInfinity(myself: Complex, numberOfIterations: number) {
    const temp = copy(myself);

    for (let i = 0; i < numberOfIterations; i++) {

        mandelbrotIteration(temp, myself);

        if (temp[0] > 2 || temp[0] < -2 || temp[1] > 2 || temp[1] < -2)
            return i;
        // return the number of iterations if explodes to infinity
    }

    return -1;
}