const greatestStrInArr=(str)=>{
    const arrStr =str.split(" ");
    let maxStr= arrStr[0].length;
    let strData = arrstr[0];
    arrStr.forEach((element) => {
       if( maxStr<element.lenght) {
           maxStr = element.length;
           strData = element;
       }
    });
    return strData;
}
console.log(greatestStrInArr(["I am react developer"]));