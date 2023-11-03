function twoSum(nums, target) {
    const numSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        console.log(complement)
        if (numSet.has(complement)) {
            console.log([nums.indexOf(complement), i])
            return [nums.indexOf(complement), i]
        }

        numSet.add(nums[i])
    }

    return [];
}

module.exports = twoSum;
