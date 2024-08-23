// write a function that reverses a string 

const reverseString = (text)=>{
    return text.split('').reverse().join('');
}

let Result = reverseString("Nishan")
console.log(Result)