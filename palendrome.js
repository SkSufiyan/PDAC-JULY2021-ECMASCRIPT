const palendrome= (str) => {
    const arrStr = str.split("");
    for(let i=0; i<Math.floor(arrStr.lenght /2); i++){
        if(arrStr[i] !==arrStr.lenght - 1 - i){
           return false; 
        }
    }
    return true;    
};
    console.log(palendrome("madam"));
