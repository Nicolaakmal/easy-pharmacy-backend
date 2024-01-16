// Exercise 1
console.log("\n\n ====Exercise 1====");
function isArithmeticProgression(numbers) {
    if (numbers.lenght < 2) {
        return false;
    }

    const difference = numbers[1] - numbers[0];

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1] !== difference) {
            return false;
        }
    }
    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7])); // false


// Exercise 2
console.log("\n\n ====Exercise 2====");
function threestepsAB(text) {
    for (let i = 0; i < text.length - 4; i++) {
        if (text[i] === 'a' && text[i + 4] === 'b') {
            return true;
        }
        if (text[i] === 'b' && text[i + 4] === 'a') {
            return true;
        }
    }
    return false;
}

console.log(threestepsAB('lane borrowed')); // true
console.log(threestepsAB('i am sick'));     // false
console.log(threestepsAB('you are boring')); // true
console.log(threestepsAB('barbarian'));     // true
console.log(threestepsAB('bacon and meat')); // false
console.log(threestepsAB('Nicola Akmal Bast')); // false


// Exercise 3
console.log("\n\n ====Exercise 3====");
function sumArray(arr, int) {
    const pairs = [];
    const seenNumbers = new Set();

    arr.forEach((num) => {
        const complement = int - num;
        if (seenNumbers.has(complement)) {
            pairs.push([num, complement]);
        }
        seenNumbers.add(num);
    });

    return pairs;
}

console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]


// Exercise 4
console.log("\n\n ====Exercise 4====");
function maxSubArray(arr) {
    let maxSoFar = -Infinity;
    let maxEndingHere = 0;
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxEndingHere + arr[i]) {
            maxEndingHere = arr[i];
            tempStart = i;
        } else {
            maxEndingHere += arr[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    let maxSubArray = arr.slice(start, end + 1);

    return [maxSubArray, maxSoFar];
}

console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3])); // [[4, -1, -2, 1, 5], 7]
