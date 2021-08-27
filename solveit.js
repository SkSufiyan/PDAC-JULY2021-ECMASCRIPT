const rootofnumber = (numbers) => {
  let square = [];

  numbers.forEach((Element) => {
    square.push(Element ** 2);
  });
  return square;
};
console.log(rootofnumber([5, 25, 2, 4, 110]));
