const num=[10,20,30];

for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}

for (let no of num)
{
    console.log(no);
}

for (const value in num){
    console.log(value,num[value]);
}

num.forEach((val,ind)=>{
    console.log(ind,val);
})