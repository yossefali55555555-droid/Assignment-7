/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = [
  { symbol: "I", value: 1 },
  { symbol: "V", value: 5 },
  { symbol: "X", value: 10 },
  { symbol: "L", value: 50 },
  { symbol: "C", value: 100 },
  { symbol: "D", value: 500 },
  { symbol: "M", value: 1000 }
];
let result =0 ;
for (let i =0 ; i <s.length ;i++){
    let current = values.find  ((ele)=>{
        return ele.symbol === s[i]
    })
    let next = values.find((ele)=>{
        return ele.symbol === s[i+1]
    })
    if(next){
    if(current.value<next.value){
        result -= current.value;
    }
    if(current.value>=next.value){
        result += current.value
    }
    }
    else{
            result+=current.value
    }
}
return result;
};






