const RemoveDup = (str) => {
  const arrStr = str.split(" ");
  const uniqueArr = [...new Set(arrStr)];
  return uniqueArr.join(" ");
};
console.log(RemoveDup("I am good .I am food . I am to go"));
