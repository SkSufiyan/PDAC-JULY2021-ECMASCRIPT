// console.log("How Are You".split(" ").reverse().join(" "));

const revStr = (str) => {
  const arrStr = str.split("");
  const newArr = [];
  for (i = arrStr.length - 1; i >= 0; i--) {
    newArr.push(arrStr[i]);
  }
  return newArr.join(" ");
};
console.log(revStr("I AM FINE"));
