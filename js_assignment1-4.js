let arr=[1,1,1,2,3,4,5,5,6,7,7];
let firstLargest=0;
let secondLargest=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>firstLargest){

    
    secondLargest=firstLargest;
            firstLargest=arr[i];
    }
}
    
        console.log('the first two largest number in array are '+firstLargest+' '+secondLargest);