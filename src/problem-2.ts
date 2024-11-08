const removeDuplicates = (nums: number[]): number[] => {
    return nums.filter((num, index) => index === nums.indexOf(num));
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5])