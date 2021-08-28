function filter_list(l) {
    let array = [];
    for( i in l){
        if (typeof l[i] == "number") array.push(l[i]);
    }
    return array;
  }
console.log(filter_list([1,'a','b',0,15])); 
