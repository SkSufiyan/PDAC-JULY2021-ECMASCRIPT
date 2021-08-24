const ADDTwoARR = (arr1, arr2) =>
  arr1.map(
    (item, index) => item + (arr2[index] === undefined ? 0 : arr2[index])
  );
console.log(ADDTwoARR([1, 2, 3, 5], [2, 5, 4, 45]));
