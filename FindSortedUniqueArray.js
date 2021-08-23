const FindSortedUniqueArray = (objarr) => {
  let mergedArr = [];
  objarr.data.forEach((element) => {
    mergedArr = [...mergedArr, ...element];
  });
  const uniqueArr = [...new Set(mergedArr)].sort((a, b) => a - b);
  return uniqueArr;
};
console.log(
  FindSortedUniqueArray({
    data: [
      [21, 25, 15, 1],
      [35, 54, 13, 2],
      [7, 1, 75, 24, 15, 9],
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    ],
  })
);
