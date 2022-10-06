let arr=[2,4,5,6,7,8,9,12,33,3];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        let temp=0;
        if(arr[i]>=arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);