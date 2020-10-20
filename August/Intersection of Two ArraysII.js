/*
* Given two arrays, write a function to compute their intersection.
* Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let startIdx = 0;
let count = 0;
let res = 0;
let timer = 0;
let newres = 0;

let findCount = (arr,num)=>{
    newres = arr.indexOf(num,startIdx)
    console.log('res',newres);
    if (newres !== -1) {
        count++;
        console.log('count',count);
        startIdx = newres+1;
        console.log('startIdx',startIdx);
        timer = setTimeout(findCount.bind(undefined,arr,num),0);
    }else{
        clearTimeout(timer);
        console.log('count',count);
    }
    return count;
};

var intersection = function(nums1, nums2) {


    let {minArr,maxArr} = nums1.length < nums2.length ? {minArr:nums1,maxArr:nums2} : {minArr:nums2,maxArr:nums1};
    let resultArr = [];


    //let num = 1;



    minArr.forEach(num=>{
        maxArr.includes(num) && resultArr.push(num)
    });

    resultArr = [...new Set(resultArr)];

    resultArr.forEach(num=>{
        let count = findCount(minArr,num);
        console.log('count!!',num,count);

        if (count>1) {
            for (let i = 0; i < count-1; i++) {
                resultArr.push(num)
            }
        }
    })

    console.log('结果',resultArr);

};



console.log(intersection([1,2,123,1,2124,124,2,2,124],[2,124,125,124,123,1,3,5,2,2,2,1]));
