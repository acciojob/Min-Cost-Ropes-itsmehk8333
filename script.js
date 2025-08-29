function mincost(arr) {
    // Sort array first
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // Insert the new rope and keep sorted
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports = mincost;
