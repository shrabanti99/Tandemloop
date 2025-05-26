const input = prompt("Enter a number: ");

const a = parseInt(input);

if (isNaN(a) || a <= 0) {
    alert("Please enter a valid positive integer.");
} else {
    const numbers = [];
    for (let i = 0; i < a; i++) {
        numbers.push(2 * i + 1);
    }
    alert("Output: " + numbers.join(", "));
}
