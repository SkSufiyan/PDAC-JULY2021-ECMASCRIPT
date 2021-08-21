const arr1 = ["cat", "mat"];
const arr2 = ["fat", "tat"];
const arr3 = ["hat", "rat"];

const joinArr = [...arr1, ...arr3, ...arr2];
const uniqArr = [...new Set(joinArr)];
console.log(uniqArr);
