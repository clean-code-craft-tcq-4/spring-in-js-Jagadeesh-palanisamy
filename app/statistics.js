module.exports=function getStatistics(numbers){
 
function getStatistics(numbers){
 
let total=0;
if(numbers.length>0){
let average = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

let result={min:Math.min(...numbers),max:Math.max(...numbers),average:average}
console.log(result)
return result;
}else{
 let result={min:'NAN',max:'NAN',average:'NAN'}
console.log(result)
return result; 
}
}
}

