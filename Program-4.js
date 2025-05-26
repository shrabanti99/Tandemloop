function countMultiples(input) {
        const result = {};
        for (let i = 1; i <= 9; i++) {
            result[i] = input.filter(num => num % i === 0).length;
        }
        return result;
    }

    const inputStr = prompt("Enter numbers separated by commas: ");
    
    if (inputStr) {
        const inputArray = inputStr.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
        const output = countMultiples(inputArray);
        alert("Output:\n" + JSON.stringify(output));
    } else {
        alert("No input provided.");
    }
