tempArr = [1,2,3];
for(let i = 0;i < tempArr.length - 1; i++){
    
    swap(tempArr,i, getRandomIntInclusive(i,tempArr.length - 1));
}
console.log(tempArr);

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}