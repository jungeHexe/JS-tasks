function sortArray(arr){
    let nums = arr.filter(x => x % 2 != 0).sort((a, b) => a - b);
    let n=0;
    for(i in arr){
        if(arr[i] % 2 != 0){
            arr[i] = nums[n];
            n++;
        }
    }
    return arr;
}
console.log(sortArray([5,7,6,8,1,3,0]));