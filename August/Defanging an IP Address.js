/*
* Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

*
*
* */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {

    //return address.replace(/\./g,'[.]')

    let addressArr = [...address]

    addressArr.forEach((val,idx)=>{
        (val==='.') && (addressArr[idx] = '[.]');
    });

    return addressArr.join('');
};

console.log(defangIPaddr('123.4.5.1'));
