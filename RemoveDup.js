const removeDup = (myLorem) => {
  const newStr = myLorem.split(" ");
  const myElem = [];
  newStr.forEach((element, index) => {
    newStr.indexOf(element) !== index && myElem.push(element);
  });
  console.log(myElem);
  const myUnique = [...new Set(myElem)];
  return myUnique;
};
console.log(
  removeDup(
    "Nobody owned any part of the land.Sotopos father owned many cattle, and if the cows continued to produce calves, he might as well become the next chief. Old Grandmother owned the beautifully tanned animal skins she used as coverlets in winter. And Sotopo owned his polished hard-wood assegais. But the land belonged to the spirits who governed life; it existed forever, for everyone, and was apportioned temporarily according to the dictates of the tribal chief and senior headman. Sotopos father occupied the hillside for the time being, and when he died the older son could inherit the loanland, but no person or family every acquired ownership."
  )
);
