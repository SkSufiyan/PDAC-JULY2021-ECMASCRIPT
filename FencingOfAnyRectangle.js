const FencingOfAnyRectangle = (edges,numberofwire,rate) => {
  let sum=0;
  for(let i=0;i < edges.length; i++){
    
    sum = sum+edges[i];
  }
  return sum * numberofwire* rate;
};  
  

console.log(`Cost of fencing is Rs. ${FencingOfAnyRectangle([10,15,10,10,10,10,22],5,10)}`);