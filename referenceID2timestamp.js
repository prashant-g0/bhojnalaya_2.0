//timestamp converter js

const timestamp = //timestamp here;
const date = new Date(timestamp);

// Outputs the date in the default format
console.log(date.toString());

// Outputs the date in a more readable format
console.log(date.toDateString() + ' ' + date.toLocaleTimeString());
