type Complex = number[];

export function add(myself: Complex, complex: Complex): Complex {
    return [myself[0] + complex[0], myself[1] + complex[1]];
}

export function square(myself: Complex): Complex {
    /* (a + bi)^2
         * = a^2 + 2abi + (bi)^2
         * = a^2 + 2abi + b^2 * -1
         * = a^2 - b^2 + 2abi
         */
    const real = myself[0];
    const imaginary = myself[1];

    return [real * real - imaginary * imaginary, 2 * real * imaginary];
}

export function copy(myself: Complex): Complex {
    return [myself[0], myself[1]];
}

export function mandelbrotIteration(myself: Complex, c: Complex): Complex {
    myself = square(myself);
    return add(myself, c);
}

export function goesToInfinity(myself: Complex, numberOfIterations: number) {
    let temp = copy(myself);

    for (let i = 0; i < numberOfIterations; i++) {

        temp = mandelbrotIteration(temp, myself);

        if (temp[0] > 2 || temp[0] < -2 || temp[1] > 2 || temp[1] < -2)
            return i;
        // return the number of iterations if explodes to infinity
    }

    return -1;
}