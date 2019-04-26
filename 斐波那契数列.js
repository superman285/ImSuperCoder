
/*
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
*/

/**
 * @param {number} N
 * @return {number}
 */

var fib = function recursion(N) {


    //递归法 通用
    if (N === 0) {
        return 0;
    }else if(N <= 2){
        return 1;
    }

    return recursion(N-1) + recursion(N-2);
    //或函数为匿名 此处使用 return fib(N-1) + fib(N-2)

    //枚举 暴力破解法
    let result = [0,1,1];
    for (let i = 3; i < 28; i++) {
        result.push(result[i-2]+result[i-1])
    }
    //return result[N];

};
