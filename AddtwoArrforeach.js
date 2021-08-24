const AddtwoArrforeach = (arr1, arr2) => {
  const newarr = [];
  arr1.forEach((element, index) => {
    newarr.push(element + arr2[index]);
  });
  return newarr;
};

console.log(AddtwoArrforeach([1, 2, 3, 4, 5], [5, 4, 6, 8, 9]));
