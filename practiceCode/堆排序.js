function buildMaxHeap(len, nums){
    for(let i = Math.floor(len / 2) - 1;i >= 0; i--){
        maxHeap(i, nums, len);
    }
}

function maxHeap(target, nums, len){
    let left = target * 2 + 1;
    let right = target * 2 + 2;
    let record = target;
    if(left < len && nums[left] > nums[target]){
        target = left;
    }
    if(right < len && nums[right] > nums[target]){
        target = right;
    }
    if(target !== record){
        swap(target, record, nums);
        maxHeap(target, nums, len);
    }
}

function swap(i, j, nums){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}