function summingTool(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    return sum
}
console.log(summingTool([1, 2, 3, 4, 5, 6]))


function whileSummingTool(numbers) {
    var sum = 0
    var i = 0;
    while (i < numbers.length) {
      sum += numbers[i];
      i++;
    }
    return sum
}
console.log(whileSummingTool([1, 2, 3, 4]))


function whileDoSummingTool(numbers) {
    var sum = 0
    var i = 0;
    do {
      sum += numbers[i];
      i++;
    }
    while (i < numbers.length)
    return sum
}
console.log(whileDoSummingTool([1, 2, 3, 4, 5]))