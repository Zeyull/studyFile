// function quickSort(nums){
//     const len = nums.length;
//     separate(0, len - 1, nums);
// }

// function separate(i, j, nums){
//     if(i < j){
//         let temp = findIndex(i,j,nums);
//         separate(i,temp - 1,nums);
//         separate(temp + 1,j,nums);
//     }
// }

// function findIndex(i,j,nums){
//     let x = i;
//     let y = j + 1;
//     let temp = nums[i];
//     while(true){
//         while(nums[++x] < temp);
//         while(nums[--y] > temp); // 如果要变为降序，只需要改变这里的大于 小于
//         if(x > y) break;
//         swap(x,y,nums);
//     }
//     swap(i,y,nums);
//     return y;
// }

// function swap(x,y,nums){
//     let temp = nums[x];
//     nums[x] = nums[y];
//     nums[y] = temp;
// }
let nums = [2,3,44,1,3,444,5,6,77,90,0];
quickSort(nums);
console.log(nums);