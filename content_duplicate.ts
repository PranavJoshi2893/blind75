const nums: number[] = [1, 2, 3, 1];

function content_duplicate(nums: number[]): boolean {

    const newMap = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        if (newMap.has(nums[i])) {
            return true;
        } else {
            newMap.set(nums[i], i);
        }
    }
    return false;
}


console.log(content_duplicate(nums));
