function towerBuilder(nFloors) {
    let arr = [];
    let char = "*";
    for(let i = 0; i < nFloors; i++){
        floor = " ".repeat(((nFloors*2 - 1) - char.length)/2) + char +  " ".repeat(((nFloors*2 - 1) - char.length)/2);
        arr.push(floor);
        char += "**";
    }
    return arr;
 }

 console.log(towerBuilder(3));