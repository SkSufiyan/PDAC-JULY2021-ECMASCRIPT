const CollectionSumofEven=(numbers)=>{
    let sumEven = 0;
    let sumOdd = 0;
    numbers.forEach(element => {
        element % 2 == 0
         ? (sumEven = sumEven + element)
         : (sumodd = sumOdd + element);
        });
        return `Sum of Even Numbers=${sumEven} and
        Sum of Odd Number=${sumOdd}
        total Sum=${sumEven + sumOdd}`;
};

console.log(CollectionSumofEven([1,2,3,45,6,78]))