const fencingForRect = (b, w, numberOfWire, costPerFeet) => {
  const perimeter = b + w + b + w;
  const totalCost = perimeter * numberOfWire * costPerFeet;
  return totalCost;
};

console.log(`Total cost for Fencing is Rs.${fencingForRect(40, 70, 7, 12)}`);
