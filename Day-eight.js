// write a function to check if two strings are anagrams.
function areAnagrams(str1, str2) {
  // Remove any spaces and convert strings to lowercase
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();

  // Check if sorted characters of both strings are equal
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Example usage
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
