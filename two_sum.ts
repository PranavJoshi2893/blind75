const nums: number[] = [2, 7, 11, 15];
const target: number = 9;

const newMap = new Map<number,number>();
for (let i = 0; i < nums.length; i++) {
    const remain:number = target-nums[i];
    if(newMap.has(remain)){
        console.log([newMap.get(remain),i]);
    }else{
        newMap.set(nums[i],i);
    }
}