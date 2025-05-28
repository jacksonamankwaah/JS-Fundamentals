// This script prints integers

const args = process.argv.slice(2);
const input = args[0];

const number = Number(input);

if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log("Not a number");
}

