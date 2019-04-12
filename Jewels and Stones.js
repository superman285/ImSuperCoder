/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have. Each character in S is a type of stone you have. You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// my ugly js
function numJewelsInStones(J,S) {
    let arr = [];
    for (let sletter of S) {
        for (let jletter of J) {
            if (sletter===jletter) {
                arr.push(jletter);
            }
        }
    }
    return arr.length;
}



//cool js on leetcode
const numJewelsInStones = (J,S)=>{
    return S.split('').filter(sletter=>J.indexOf(sletter)!==-1).length;
}

//better
const numJewelsInStones = (J,S)=>{
    return S.split('').filter(sletter=>J.includes(sletter)).length;
}

/*const numJewelsInStones = (J,S)=>{
    let S_arr = S.split('');
   console.log(S_arr.map(letter=>{
        return J.indexOf(letter)!==-1
    }))
}*/

numJewelsInStones('as','asfbasfbasdf');