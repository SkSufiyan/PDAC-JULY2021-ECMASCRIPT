const greatestNum =(arrNum) =>{
    let maxNum = 0;
    arrNum.forEach((element) =>{
        if (element >maxNum) {
            maxNum =element ;
        
    }
        });
        return maxNum;
    };

    console.log(greatestNum([2,5,9,15]))