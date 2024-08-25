// Create a function that converts Celsius to Fahrenheit 

const celsiusToFahrenheit =(celsius)=>{
    return (celsius *9/5)+32;
}

let celsius = 25;
console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`);