const FindpercentageOpt = (numbers) =>
  numbers.reduce((acc, curr) => acc + curr) / numbers.length;

console.log(FindpercentageOpt([45, 63, 28]));

console.log(FindpercentageOpt([12, 69, 85, 69]));

console.log(FindpercentageOpt([58, 45, 45, 44, 55]));
