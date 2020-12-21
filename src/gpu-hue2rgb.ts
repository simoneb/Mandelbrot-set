export function min3(a: number, b: number, c: number){
    let minab = Math.min(a, b);
    return Math.min(minab, c);
}

export function f(n: number, hue: number){
    let k = (n + hue / 60) % 6;
    return 1 - Math.max(0, min3(k, 4 - k, 1));
}

export function hue2rgb(hue: number){
    return [
        f(5, hue) * 255,
        f(3, hue) * 255,
        f(1, hue) * 255,
        255
    ];
}