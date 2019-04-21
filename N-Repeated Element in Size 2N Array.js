/**
 * @param {number[]} A
 * @return {number}
 */

/*In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
Return the element repeated N times.*/

var repeatedNTimes = function(A) {

   return A.sort((a,b)=>a-b).find((val,idx)=>A[idx]===A[idx+1]);

   //fast way 用对象来记录重复的值 6
    var map = {}
    for (var i = 0,length=A.length; i < length; i++) {
        var e = A[i]
        if (map[e]) {
            return e
        } else {
            map[e] = true
        }
    }

};

var arr = [1,2,3,3];

console.log(repeatedNTimes(arr));