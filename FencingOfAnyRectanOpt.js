const FencingOfAnyRectan = (edges,numberofwire,rate) => {
    let sum = 0;
    edges.forEach((element ) => {sum = sum + element;
        sum = sum + element;
    });
    return sum * numberofwire* rate;
  }
    
  
  console.log(
      `Cost of fencing is Rs. ${FencingOfAnyRectan(
          [10,15,10,10,10,10,22],
          5,
          10)}`);