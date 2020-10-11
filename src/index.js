module.exports = function reverse (n) {
    return Math.abs(n).toString()
    .replace(/0*$/,"")
    .split('')
    .reverse().join('');
 };


    // const abs = Math.abs(n);
    // const str = abs.toString();
    // const replace = str.replace(/0*$/,"");
    // const split = replace.split('');
    // const reverse = split.reverse().join('');
    // return Number(reverse);
 