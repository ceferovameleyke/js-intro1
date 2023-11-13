const nowArr = [];
const findMultiples = function(number,limit){
    for (let x = number; x<=limit; x*=2) {
      nowArr.push(x);
        
    }
    return nowArr;
}
console.log(findMultiples(6,25));