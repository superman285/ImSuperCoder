/**
 * @param {string} str
 * @return {string}
 */

//simple way
const toLowerCase2 = str=> str.split('').map(char=>char.toLowerCase()).join('');

String.prototype.toLowerCase2 = toLowerCase2;

let str = "AAAS";

console.log(str.toLowerCase2(str));

const toLowerCase = function (str) {
    return str.split('').map(char=>String.fromCharCode(char.charCodeAt(0)+32)).join('');
}

let str2 = "AAABBS";

console.log(toLowerCase(str2));