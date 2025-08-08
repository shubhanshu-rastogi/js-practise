function findMissingnuminArray(arr)
{
    const arrarLength=arr.length +1
    const expectedSum=(arrarLength * (arrarLength + 1))/2
    const actualSum=arr.reduce((acc,num) => acc + num, 0)

    return expectedSum-actualSum;


}

console.log(findMissingnuminArray([1,2,3,4,5,7,8]));

const arr = [3,6,9,25,5];

function findSmallestnum(arr)
{
    const num=arr.reduce((curr,acc)=>curr < acc ? curr : acc)
    return num
}

function findSmallestnum1(arr)
{
    return Math.min(...arr)
}

console.log(findSmallestnum(arr));

console.log(findSmallestnum1(arr));

