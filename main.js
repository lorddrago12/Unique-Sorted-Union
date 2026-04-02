function uniteUnique(firstArray, secondArray, ...remainingArrays) {
    // Merge all arrays, then keep only first occurrence order.
    const combinedValues = [...firstArray, ...secondArray, ...remainingArrays.flat()];
    const uniqueValues = [];

    for (const value of combinedValues) {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    }

    return uniqueValues;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
