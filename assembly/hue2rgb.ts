export function min3(a: f64, b: f64, c: f64): f64 {
    let minab = Math.min(a, b);
    return Math.min(minab, c);
}

/* formulae from
 * en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB_alternative
 * with S = 1 and V = 1
 */
function f(n: u8, hue: f64): f64 {
    let k = (n + hue / 60) % 6;
    return 1 - Math.max(0, min3(k, 4 - k, 1));
}
export function hue2rgb(hue: f64): u8[] {
    return [
        f(5, hue) * 255 as u8,
        f(3, hue) * 255 as u8,
        f(1, hue) * 255 as u8
    ];
}