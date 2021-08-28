function rot13(message){
    let str = '';
    message = message.toLowerCase().split('');
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(let i = 0; i < message.length; i++){
        if(arr_en.indexOf(message[i])+13 < arr_en.length - 1){
            str += arr_en[arr_en.indexOf(message[i])+13];
        }else{
            str += arr_en[(arr_en.indexOf(message[i])+13) - arr_en.length];
        }
    }
    return str;
}
console.log(rot13('test'));