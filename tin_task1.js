

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrise(rl){
    let arr = str.split("  ").map(Number);
    if((arr[3]-arr[1]) > 0){
    return arr[0] + (arr[3]-arr[1])*arr[2];}
    else{
        return arr[0];
    }
}

rl.close();