// A script that prints  the first argument passed.
// Get and process command-line argument ( skip the first two: node and file name

const args = process.argv.slice(2);

if (args[0] === undefined) {
console.log("No argument");
} else {
console.log(args[0]);
}
