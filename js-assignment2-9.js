function displayMax(arg1, arg2, arg3) {
    return Math.max(arg1, arg2, arg3);
}

let nums = [2, 5, 3];
//displayMax(nums);
console.log(`the maximum number is :${displayMax(...nums)}`);