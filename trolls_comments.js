function disemvovel(str){
    let volws = str.split('');
    let del_char = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];
    for(i in str){
        if(del_char.indexOf(str[i]) != -1){
            volws.splice(i, 1, '');
        }
    }
    return volws.join('');
}

console.log(disemvovel("What are you, a communist?"));