let str='CITIUSTECH';
let count=0;
for(let i=0;i<str.length;i++)
{
    if(str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U'){
        count++;
    }
}
console.log(count-1);