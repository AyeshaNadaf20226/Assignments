
let count=0;
for(let j=5;j<=50;j++)
{

for(let i=2;i<j/2;i++)
{
if(j%i==0)
{
count=count+1;
}
}
if(count==0)
{
    console.log(j);

}
count=0;
}
