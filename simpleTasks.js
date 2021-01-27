function task1_isEven(n) {
    return (0 == n % 2)
}

function task2_isOdd(n) {
    return  n > 100 && !task1_isEven(n);
}


let x = task2_isOdd(6)
console.log( x )
