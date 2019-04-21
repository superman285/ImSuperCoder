/*
 * @param {number[]}
 * @return {number[]}
 */

let selectionSort = function (arr) {


    let count = 0;
    for (let turn = 1, totalTurns = arr.length; turn < totalTurns; turn++) {
        let min = arr[turn - 1], minIdx = turn - 1;
        for (let i = turn, length = arr.length; i < length; i++) {
            count++;
            if (min > arr[i]) {
                [min, minIdx] = [arr[i], i];
            }
        }
        [arr[turn - 1], arr[minIdx]] = [arr[minIdx], arr[turn - 1]];
    }
    console.log(count);
    return arr;
};

var arr = [11, 4, 13, 5, 2, 5, 1, 6, 8,21]

console.log(selectionSort(arr));