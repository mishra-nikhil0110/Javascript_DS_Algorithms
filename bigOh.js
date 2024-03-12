


function fun1(n) {

    let result = 0;

    // for (let i = 0; i < n; i++) {
    //     result += i;
    // }
    result = n * (n + 1) / 2;
    return result;


}

var t1 = performance.now();
var res = fun1(100000000);
var t2 = performance.now();
console.log(`performance is ${t2 - t1} and result is : ${res} `)