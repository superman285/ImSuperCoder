/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */


var hammingDistance = function(x, y) {

    //超麻烦方法..
    let x_pos = x.toString(2).split('').reverse(),
        xLen = x_pos.length;
    let y_pos = y.toString(2).split('').reverse(),
        yLen = y_pos.length;

    //concat 和 fill的用法
    [x_pos,y_pos,xLen,yLen] = xLen>yLen ?  [x_pos,y_pos.concat(Array(xLen-yLen).fill(0)),xLen,xLen]:[x_pos.concat(Array(yLen-xLen).fill(0)),y_pos,yLen,yLen];

    console.log(x_pos,y_pos,xLen,yLen);
    
    let count = 0;

    for (let i = 0; i < xLen; i++) {
        if (x_pos[i]!=y_pos[i]) {
            count++
        }
    }



    return count;

    //简易解法
    /*var count = 0;
    x = x ^ y;
    while(x !== 0){
        //相同位与1比较，为1则xy末位不同，count++
        if(x & 1 === 1){
            count++;
        }
        x >>= 1;
    }
    return count;*/

    //神奇！！！
    //先运用异或运算符，如果是1 代表那一位不同 如果是0 代表那一位相同 过滤 是1的加入数组 然后计长度 即1出现次数
    //return (x ^ y).toString(2).split('').filter(num => num === "1").length;

    // 135ms 16.23%
   // return [... (x ^ y).toString (2)].map ((x) => parseInt (x)) . reduce ((acc, x) => acc + x) 将1累加 就相当于 计数1出现的次数

//125ms 27.36%
 //   return (x ^ y).toString (2) . replace (/0/g, '') . length

// 105ms 67.88%
  //  return [... (x ^ y).toString (2)].filter ((c) => c === '1') . length

};


console.log(hammingDistance(1,4));