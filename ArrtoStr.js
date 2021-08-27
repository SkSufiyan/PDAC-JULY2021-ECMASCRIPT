// const arr = [10, 20, 30];

// console.log(arr.reduce((acc, num) => acc + num ** 3, 1));

const arr = [null, 2, 3, 4, "cat", { num: 25 }, undefined, 2];

const newArr = arr.filter((item) => typeof item === "number" && item);

console.log(newArr.reduce((acc, num) => acc + num));
