function f(n: number, hue: number){
    let k = (n + hue / 60) % 6;
    return 1 - Math.max(0, Math.min(k, 4 - k, 1));
}

export function hue2rgb(hue: number){
    return [
        f(5, hue) * 255,
        f(3, hue) * 255,
        f(1, hue) * 255
    ];
}