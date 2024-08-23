// Create a function to check if a number is even or odd.

const checkEeneOdd = (n)=>{
    if(n % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}

let result = checkEeneOdd(4)
console.log(result)
