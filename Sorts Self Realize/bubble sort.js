/*
 * @param {number[]}
 * @return {number[]}
 */

let bubbleSort = function(arr){

    let count = 0;

    //效率比较高的方式
    for (let turn = 1,totalTurns=arr.length; turn < totalTurns; turn++) {
        for (let i = 0, length = arr.length - turn; i < length ; i++) {
            count++;
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    console.log(count); //比较45次

    return arr;

    //forEach嵌套方式. 还不如标准for循环，又慢又长。
    /*let length = arr.length;
    arr.forEach((_,turnIdx)=>{
        if (turnIdx===length-1) {
            return;
        }
        arr.forEach((num,i)=>{
            if (i===length-turnIdx-1) {
                return;
            }
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        })
    });*/

    return arr;

};


var arr = [143,534,62,36,2,3,7,1,35,52]

console.log(bubbleSort(arr));