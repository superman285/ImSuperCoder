
/*
* Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).
* */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {



    let temp = A.join('');
    let result = [];


    for (let i = 0,length=A[0].length; i < length; i++) {
        //看A[0][i] 在 temp出现的次数 看 A[0][i] 是否被所有A[i]所包含
        let count = temp.split(A[0][i]).length - 1;
        if (count>=A.length && A.every(word=>word.includes(A[0][i])) ) {
            result.push(A[0][i]);
        }
    }

    return result;


};

let arr = ["bella","label","roller"];
console.log(commonChars(arr));


