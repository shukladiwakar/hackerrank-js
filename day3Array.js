function getSecondLargest(nums) {
    let secondLargest = 0;
    nums.forEach(function (e,i,nums) {
      if(e>secondLargest){
          secondLargest=e;
      }
    })
    
    return secondLargest;
}

console.log(getSecondLargest([2, 3, 4, 1, 9, 21, 21]));