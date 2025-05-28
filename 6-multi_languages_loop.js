// This script print 3 lines.

const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let result = "";

for (let i = 0; i < messages.length - 1; i++) {
  result += messages[i] + "\n";
}

result += messages[messages.length - 1];

console.log(result);
