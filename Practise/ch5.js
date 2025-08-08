function factorial(n){
    let output=1;
    for (let i=n;i>1;i--)
    {
        output =output*i
    }
    return output;
}

console.log(factorial(5));


function sumOfDigits(n)
{
    return Math.abs(n).toString()
    .split('')
    .reduce((sum,digit)=>sum+Number(digit),0);
}

console.log(sumOfDigits(12345));


function reverseString(str){
    return str.trim().split(/\s+/).reverse().join(' ');
}

console.log(reverseString(' I   love java script'));
