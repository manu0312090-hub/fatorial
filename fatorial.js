function fatorial(n) {
    if (n < 0) return null; 
    if (n === 0 || n === 1) return 1;

    let r = 1;
    for (let i = 2; i <= n; i++) {
        r *= i;
    }
    return r;
}
module.exports = fatorial;
