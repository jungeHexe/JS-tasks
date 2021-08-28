function toJadenCase(str) {
    str = str.split(' ');
    for(i in str){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));