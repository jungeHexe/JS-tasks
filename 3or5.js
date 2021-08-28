function solution(number){
    let sum = 0;
    for(let k3 = 0; k3 < number; k3 += 3){
        console.log(k3);
        sum += k3;
    }
    for(let k5 = 0; k5 < number; k5 += 5){
        console.log(k5);
        if(k5 % 3 !== 0){
            sum += k5;
        }
    }
    return sum;
}

console.log(solution(10));