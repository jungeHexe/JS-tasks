//Task 1
const cityName = 'Vladimir';
const cityCountry = 'Russia';
let cityPopulation = 346922;
const footbalField = true;

//Task 2
const heightRect = 40;
const widthRect = 70;
let squareRect = heightRect * widthRect;
//Task 2.2
function getSquare(height,width){
    return height * width;
}
getSquare(heightRect, widthRect);

//Task 3
let time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;

let dist = time * (speedOfFirst + speedOfSecond);
//тоже можно сделать функцией, принимающей все три аргумента и возвращающей результат

//Task 4
const randomNumber = Math.floor(Math.random() * 100);

if(randomNumber < 20){
    console.log("randomNumber меньше 20");
}else if(randomNumber > 50){
    console.log("randomNumber больше 50");
}else{
    console.log("randomNumber больше 20, и меньше 50");
}

//Task 5
switch(randomNumber){
    case randomNumber < 20:
        console.log("randomNumber меньше 20");
        break;
    case randomNumber > 50:
        console.log("randomNumber больше 50");
        break;
    default:
        console.log("randomNumber больше 20, и меньше 50");
        break;
}

