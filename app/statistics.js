module.exports=function getStatistics(numbers){
 

 
let total=0;
if(numbers.length>0){
let average = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

let result={min:Math.min(...numbers),max:Math.max(...numbers),average:average/numbers.length-1}
console.log(result)
return result;
}else{
 let result={min:NaN,max:NaN,average:NaN}
console.log(result)
return result; 
}

}

