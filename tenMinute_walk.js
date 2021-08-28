function isValidWalk(walk) {
    if((walk.length == 10)){
        let count_n = walk.filter(x => x=='n').length;
        let count_s = walk.filter(x => x=='s').length;
        let count_e = walk.filter(x => x=='e').length;
        let count_w = walk.filter(x => x=='w').length;
        if((count_n == count_s)&&(count_e == count_w)){
            return true;
        }
        else{return false;}
    }
    else{
        return false;
    }
  }
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));