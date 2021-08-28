function nbYear(p0, percent, aug, p) {
   let n = 0;
   while(p0 <= p){
       p0 = p0 * (1 + percent * 0.01) + aug;
       n++;
   }
   return n;
}

console.log(nbYear(1000,2.0,50,1214));