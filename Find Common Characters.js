
/*
* Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).
* */

/*示例 1：
输入：["bella","label","roller"]
输出：["e","l","l"]

示例 2：
输入：["cool","lock","cook"]
输出：["c","o"]*/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {

    //错误解法❌
    /*let temp = A.join('');
    let result = [];


    for (let i = 0,length=A[0].length; i < length; i++) {
        //看A[0][i] 在 temp出现的次数 看 A[0][i] 是否被所有A[i]所包含
        let count = temp.split(A[0][i]).length - 1;
        if (count>=A.length && A.every(word=>word.includes(A[0][i])) ) {
            result.push(A[0][i]);
        }
    }

    return result;*/
    //答案错误。。 另想解法

    //太绝了 这个解法!! 从第0个开始0、1、2 依次和前一个对比
    //0对比0 1对比0 2对比1
    //重复的字符要处理下 干掉 acc.splice
    return A.reduce((acc, i) => {
        return Array.from(i).filter((c) => {
            const index = acc.indexOf(c);
            if(index >= 0) {
                acc.splice(index, 1)
                return c;
            }
        })
    }, A[0].split(''));




};

let arr = ["bella","label","roller"];
console.log(commonChars(arr));


