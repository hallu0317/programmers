function solution(nums) {
    let num = [...new Set(nums)];
    if(num.length > nums.length /2) {
        return nums.length/2;
    }
    else {
        return num.length;
    }
}


