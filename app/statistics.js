module.exports=function getStatistics(numbers){
 
let total=0;
let average = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

let result={min:Math.min(...numbers),max:Math.max(...numbers),average:average}
return result;
}

