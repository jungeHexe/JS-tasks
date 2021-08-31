function isPrime(n) {
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) return false;
    }
    return true;
}

const isPrime2 = n => {  /*принимает число и возвращает все простые числа до него через решето Эратосфена*/
    let arrPrime = [];
    for(let i = 2; i <= n; i++){
        arrPrime.push(let[i]);
        
    }
}

console.log(isPrime(9));