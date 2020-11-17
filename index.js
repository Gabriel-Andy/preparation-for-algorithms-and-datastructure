const ValidAnagram = (str1, str2) => {
  //check if the two strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }
  //define two empty objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // fill out  the objects with properties  and values, which  is every character of the string as well as the number of the count
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let prop in frequencyCounter1) {
    if (!(prop in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[prop] !== frequencyCounter2[prop]) {
      return false;
    }
  }
  return true;
};
// this is a very intuitive solution
// the time complexity of this function is O(n)
console.log(ValidAnagram("rat", "car"));

const countUniqueValue = (array) => {
  let counter = {};
  for (let char of array) {
    counter[char] = (counter[char] || 0) + 1;
    console.log(counter)
  }
  let newObject = Object.keys(counter);

  let objectLength = newObject.length;
  if (newObject[0] === "") {
    return 0;
  }

  return objectLength;
};
console.log(countUniqueValue([""]));
// the time complexity is O(n)  linear time
// space complexity is O(1) constant time
