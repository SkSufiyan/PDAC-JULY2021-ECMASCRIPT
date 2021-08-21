if (arrNum[mid]===findNum){
    return mid;
} else if(arrNum[mid]>findNum){
    firstIndex=mid;
}else{
    lastIndex=mid;
}

const bisectionAlgo=(arrNum ,findNum)=>{
    let firstIndex =0;
    let lastIndex= arrNum.length-1;
    let mid=Math.floor((firstIndex+ lastIndex)/2);



console.log(bisectionAlgo([2,9,4,5,6,8,9,10,15240,0]))
}