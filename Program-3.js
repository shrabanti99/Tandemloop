function generateNumber(n) {
  if (n % 2 === 0) {
    n -= 1;
  }
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(2 * i + 1);
  }
  return numbers;
}

const userInput = prompt("Enter a number:");

if (userInput !== null) {
  const n = parseInt(userInput);
  if (!isNaN(n) && n > 0) {
    const series = generateNumber(n);
    alert("Output: " + series.join(", "));
  } else {
    alert("Please enter a valid positive integer.");
  }
}
