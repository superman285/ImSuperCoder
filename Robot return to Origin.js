/*
 * @param {string} moves
 * @return {boolean}
 */


//stupid way
var judgeCircle = function(moves) {
    let pos_current = [0,0];

    [...moves].forEach(direction=>{
        switch (direction) {
            case 'U':
                pos_current[0] += 1;
                break;
            case 'D':
                pos_current[0] -= 1;
                break;
            case 'L':
                pos_current[1] -= 1;
                break;
            case 'R':
                pos_current[1] += 1;
        }
    });

    return pos_current[0]==pos_current[1]==0;
};

var a = 1;
module.a = 2
global.a = 3;

console.log('module.a',module.a);
console.log('global.a',global.a);

console.log(__filename,__dirname);

const chalk = require('chalk');

console.log(chalk.green(module.a));

for (var i = 0; i < 3; i++) {
    setTimeout(()=>{
        console.log(i);
    },0)
};