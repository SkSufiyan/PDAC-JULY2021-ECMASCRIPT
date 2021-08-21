const fact =(num) => (num <2 ? 1: num *fact(num-1));


console.log(fact(9));