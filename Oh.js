function XO(str){
    str = str.split('');
    if(str.filter(x => (x=='x'|| x == 'X')).length == str.filter(x => (x=='o'|| x == 'O')).length){
        return true;
    }else{
        return false;
    }
}
console.log(XO("xxOox"));