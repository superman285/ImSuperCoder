/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {


    return parseInt([...num.toString(2)].reduce((acc, num) => {
        return acc + (
            1 ^ num)
    }, ""),2)

};

console.log(findComplement(11));