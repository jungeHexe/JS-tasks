function tickets(peopleInLine){
    let bank = [];
    bank.push(peopleInLine[0]);
    for(let i=1; i < peopleInLine.length; i++){
        if(peopleInLine[i] - 25 !== 0){
            if((peopleInLine[i] - 25) in bank){
                bank.pop(peopleInLine[i] - 25);
            }
            else{
                return "NO";
            }
        }
        bank.push(peopleInLine[i]);
        console.log(bank);
    }
    return "YES";
  }
  console.log(tickets([25, 25, 50]));