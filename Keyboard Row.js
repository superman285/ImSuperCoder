/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {


    let row1 = "QWERTYUIOP";
    let row2 = "ASDFGHJKL";
    let row3 = "ZXCVBNM";

   return words.filter(word=>{

        if(row1.includes(word[0].toUpperCase())){
            /*return [...word.toUpperCase()].every(letter=>{
                row1.includes(letter);
            })*/
            return true;
        }else if(row2.includes(word[0].toUpperCase())){
            /*return [...word.toUpperCase()].every(letter=>{
                row2.includes(letter);
            })*/
            return false;
        }else{
            /*return [...word.toUpperCase()].every(letter=>{
                row3.includes(letter);
            })*/
            return false;
        }
    })


};


var wordsArr = ["Hello", "Alaska", "Dad", "Peace"];

console.log(findWords(wordsArr));