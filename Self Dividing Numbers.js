/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
/*
    let result = [];
    for (let number = left; number < right + 1; number++) {
        [...String(number)].every(char => +char && number % (
            +char) === 0) &&
        result.push(number);
    }
    ;
    return result;*/

    //更炫酷的，一句话搞定。。。
    return Array(right - left + 1).fill()
           .map((_, idx) => idx + left)
           .filter(number =>[...String(number)].every(char => +char && !(number%(+char))));
};

console.log(selfDividingNumbers(1, 20));