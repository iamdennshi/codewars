// Task - https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
    if (n == 0)
        return [];

    else if (n < signature.length) {
        return signature.slice(0, n);
    }
    let max = n - signature.length;
    for (let i = 0; i < max; i++) {
        signature.push(signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3]);
    }
    return signature;
}
console.log(tribonacci([2,3,5], 5))