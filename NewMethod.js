const str = "hello world!";

// step 1:
const str = str.split("");
console.log(str); // Output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

// step 2:
const strReverse = str.reverse();
console.log(strReverse); // Output: ["!", "d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h"]

// step 3:
const strReverse = strReverse.join("");
console.log(strReverse); // Output: !dlrow olleh
