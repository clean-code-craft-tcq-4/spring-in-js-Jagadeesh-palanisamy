module.exports=function getStatistics(numbers){
    let totalVaue=0;
    totalVaue=totalVaue+numbers;
    if(totalVaue>180){
        return 1;
    }else{
        return 0;
    }

}

