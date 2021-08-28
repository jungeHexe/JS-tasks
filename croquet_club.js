function openOrSenior(data){
     let ans = [];
     for(hum in data){
        (data[hum][0] >= 55 && data[hum][1] >= 7) ? ans.push("Senior") : ans.push("Open");
     }
     return ans;
 }
 console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]));