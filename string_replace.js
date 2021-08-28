function mask(cc){
    let length = parseInt(cc.length-4);
    let regexp = /\d{length}/;
    return cc.match(regexp);
}

console.log(mask('678346592387683'));