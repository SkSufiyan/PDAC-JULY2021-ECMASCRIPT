const SubsExists=(str)=>{
    return  str.split(" ").filter((item)=>item==="Lorem").length;
};

const strData ="Lorem,Lorem,Lorem,Lorem";

console.log(SubsExists(strData));