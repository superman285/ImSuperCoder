/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string, find the length of the longest substring without repeating characters.

 Example 1:

 Input: "abcabcbb"
 Output: 3
 Explanation: The answer is "abc", with the length of 3.
 Example 2:

 Input: "bbbbb"
 Output: 1
 Explanation: The answer is "b", with the length of 1.
 Example 3:

 Input: "pwwkew"
 Output: 3
 Explanation: The answer is "wke", with the length of 3.
 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {


    const len = str.length;

    const strArr = str.split('');

    const compArr = [1];

    console.log('strArr',strArr);

    strArr.forEach((char,idx) => {
        console.log('char idx',char,idx);
        for (let i = idx+1; i < len; i++) {
            if( char == strArr[i]) {
                console.log('idx,i',idx,i);
                const resLen = i - idx;
                console.log('结果',resLen);
                compArr.push(resLen);
                break;
            } else {
                console.log('else idx,i',idx,i);

                console.log('不等的结果',i- idx + 1);
                compArr.push(i - idx + 1)
            }
        }
    })

    return str ? Math.max(...compArr) : 0

};

let test1 = lengthOfLongestSubstring("abcabcbb");

console.log(test1);
















