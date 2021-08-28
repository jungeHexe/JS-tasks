function isPangram(string){
    string = string.toLowerCase()
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(i in arr_en){
        if(string.indexOf(arr_en[i]) == -1){
            return false;
        }
    }
    return true;
  }
 console.log(isPangram("This is not a pangram."));