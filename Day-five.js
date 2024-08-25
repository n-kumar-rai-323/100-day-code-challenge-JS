//Write a function to check if a number is prime.
const isPrime=(n)=>{
    if(n <=1){
        return false;
    }
    for(let i =2; i<=Math.sqrt(n); i++){
        if(n % i ===0){
            return false;
        }
    }
    return true;
}


let num = 29;
console.log(`${num} is prime: ${isPrime(num)}`);