const Subsexists=(str)=>{
    const arrStr= str.split(" ");
    let cnt = 0;
    arrStr.forEach((element)=> {
        if (element.toUpperCase()=== "Lorem".toUpperCase()){
            cnt =cnt +1;
        }
    });
    return cnt;
};

const strData ="Lorem Lorem Lorem Lorem";

console.log(Subsexists(strData));