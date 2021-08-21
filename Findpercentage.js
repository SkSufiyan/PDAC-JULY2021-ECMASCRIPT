const Findpercentage = (sum) => {
  let TotalofNumbers = 0;
  sum.forEach((element) => {
    TotalofNumbers = TotalofNumbers + element;
  });

  const average = TotalofNumbers / sum.length;
  return average;
};
console.log(Findpercentage([45, 63, 28]));
