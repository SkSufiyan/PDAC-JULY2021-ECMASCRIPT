const FindallDupARR = (arr) => {
  const newArr = [];
  arr.forEach((element, index) => {
    arr.indexOf(element) !== index && newArr.push(element);
  });
  return newArr;
};
console.log(FindallDupARR([1, 2, 3, 4, 5, 6, 2, 3, 1, 5]));
