/*
 * @param {number[]}
 * @return {number[]}
 */

let countingSort = function (arr) {

    /*var data = [1,25,3,4.23]
    var maxData = data[0],minData= data[0];
    for (var i = 0; i < data.length; i++) {
        if (data[i]>maxData) {
            maxData = data[i];  // 最大值
        };
        if (data[i]<minData) {
            minData = data[i];  // 最小值
        }
    }*/

    //let start = Math.min(arr);
    let end = Math.max(...arr);
    console.log(end);

    //+1防越界
    let supArr = Array(end+1).fill(0);

    for (let i = 0, length = arr.length; i < length; i++) {
        supArr[arr[i]]++;
    }

    let resArr = [];

    supArr.forEach((val, idx) => {
        if (val) {
            for (let i = 0; i < val; i++) {
                resArr.push(idx);
            }
        }
    });

    return resArr;

};

var arr = [11, 4, 13, 5, 2, 5, 1, 6, 8, 21, 2, 2, 2];

console.log(countingSort(arr));