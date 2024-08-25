// Write a function to calculate the area of a circle given its radius.

const areaCircle = (number)=>{

    return 3.14* (number*number)
}

let result = areaCircle(3)
console.log(result)

// another way 
function calculateCircleArea(radius) {
    if (radius <= 0) {
      return "Radius must be a positive number";
    }
    return Math.PI * Math.pow(radius, 2); // Area formula: πr²
  }
  
  // Example usage
  let radius = 3;
  console.log(`The area of the circle with radius ${radius} is ${calculateCircleArea(radius)}`);
  