/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {


    //笨办法
    let I_Sort = Array(S.length+1).fill('').map((_,idx)=>idx),
        D_sort = [...I_Sort].reverse();

    let output = [],
        icount = 0,
        dcount = 0;
    for (let val of S) {
        if (val=="I") {
            output.push(I_Sort[icount++]);
        }else {
            output.push(D_sort[dcount++]);
        }
    }
    output.push(I_Sort[icount]);


    let ic = 0,
        dc = 0;
    let out = [...S].map((val,idx)=>{
        if (val=="I") {
            /*ic++;
            return (idx-dc)*/
            return ic++
        }else {
            return (S.length-(dc++))
        }
    });
    out.push(ic)
    //return out;

    //faster way
    let icc = 0,
        dcc = S.length;
    let out2 = [];
    [...S].map(val=>val=="I"?out2.push(icc++):out2.push(dcc--)
    );
    out2.push(icc);
    return out2;

    //return output;


};

console.log(diStringMatch('DIDIDDDII'));