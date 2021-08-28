function multi(numb){
    let pr = 1;
    while(numb != 0){
        pr *= numb % 10;
        numb  = Math.floor(numb/10);
   }
   return pr;
}
function persistence(num) {
    let pers = 0;
    while(num > 9){
        num = multi(num);
        pers++;
    }
    return pers;
 }
 console.log(persistence(4));