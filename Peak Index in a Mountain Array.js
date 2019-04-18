/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {


    //手动排序
    let [max,maxIdx] = [0,0];
    A.forEach((val,idx)=>{
        if (val>max) {
            [max,maxIdx] = [val,idx];
        }
    });
    return maxIdx;

    //one line awesome 😎
    //return A.indexOf(Math.max(...A));

    //仔细审题 其实没必要遍历全部 从左端一直找到最大值即可，右边不需要遍历了
    for (let length = A.length,i = 0; i < length; i ++) {
        if (A[i] > A[i+1]) {
            return i;
        }
    }

    //二分查找
    let left = 0,
        right = A.length - 1;
    while (left < right) {
        let mid = Math.floor((left+right)/2);
        if (A[mid] < A[mid+1]) {
            left = mid;
        } else if (A[mid] < A[mid-1]) {
            right = mid;
        } else {
            return mid;
        }
    }

};

var arr = [1,3,5,2,0];

console.log(peakIndexInMountainArray(arr));