const str = "hello world!";

// step 1:
const strChunks = str.split("");
console.log(strChunks); // Output: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

// step 2:
const strChunksReverse = strChunks.reverse();
console.log(strChunksReverse); // Output: ["!", "d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h"]

// step 3:
const strReverse = strChunksReverse.join("");
console.log(strReverse); // Output: !dlrow olleh
