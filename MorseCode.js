/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {

    const mosList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  return  [...new Set(words.map(word=>word.split('').reduce((total,curVal)=>total+mosList[curVal.charCodeAt(0)-97])))].length;



};