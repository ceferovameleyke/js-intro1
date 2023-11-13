const pushArr=[];
const Myfunck=function (elaveet, parametr) {
  for (let i = 0; i < parametr; i++) {
    pushArr.push(elaveet[i]);
  }
  return pushArr;
} 
  console.log(Myfunck([1,2,3,4,5],4));