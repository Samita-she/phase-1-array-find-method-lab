// code your solution here
// index.js

function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Example usage
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
];

console.log(superbowlWin(record)); // Output: "2015"

module.exports = superbowlWin;
