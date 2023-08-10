// o(n^2)
// Usually found in functions with nested loops. The number of operations in this case is a square of the value of n.

function log(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

log(10);