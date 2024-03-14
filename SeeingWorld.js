var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Japan", "Italy", "Australia", "Canada", "Brazil"];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Show that the original order remains the same
console.log("Original Order (still):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Show that the original order remains the same
console.log("Original Order (still):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order (again):", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", placesToVisit);
