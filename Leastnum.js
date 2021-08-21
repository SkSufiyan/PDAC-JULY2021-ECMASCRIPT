const LeastNum= (arrNum) =>{
    let minNum =arrNum[0];
    arrNum.forEach(element => {
        if (element < minNum) {
        minNum =element ;
    }
    });
    return minNum;
};

console.log(LeastNum([7,5,8,25,99]));