function doubleChar(str) {
  return str
    .split('')
    .map(char => char + char)
    .join('');
}

console.log(doubleChar("String"));     
console.log(doubleChar("Hello World!")); 