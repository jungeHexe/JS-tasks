var ans="";
function dnk(str){
    if(str.length == 0){
        return ans;
    }
    else{
        let char = str[0];
        let count=0;
        for(let i=0; i < str.length; i++){
            if(str[i] === char){
                count++;
            }else{
                break;
            }
        }
        ans += char + count.toString();
        str = str.slice(count);
        return dnk(str);
    }
}

console.log(dnk("bbbbvvccmmmHH"));
