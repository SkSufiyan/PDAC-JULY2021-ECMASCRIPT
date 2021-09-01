const arr1 = [1, undefined, "Ali", 3, 4, {}, "Cat", 582, 3.56, "mat", null];

const arr2 = [];

arr1.forEach((element) => {
  if (typeof element === "string") {
    arr2.push(element.toUpperCase());
  }
});

console.log(arr2);

// const ages = [32, 33, 16, 40];

// ages.filter(checkAdult); // Returns [32, 33, 40]

// function checkAdult(age) {
//   return age >= 18;
// }
