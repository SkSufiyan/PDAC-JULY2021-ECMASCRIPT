const Prime = (num) => {
  const boundry = Math.floor(Math.sqrt(num));
  for (i = 2; i <= boundry; i++) {
    if (num % i === 0) {
      return "Not a Prime";
    }
  }
  return "Its Prime";
};
console.log(Prime(3));
