const book='ramayan';

function countVowelConstant(str)
{
    const vowels='aeiou';
    let vowelCount=0;
    let constantCount=0;

    str=str.toLowerCase();

    for (let char of str){
        if(/[a-z]/.test(char))
        {
            if(vowels.includes(char)){
                vowelCount++
            }else{
                constantCount++;
            }
        }
    }

    return vowelCount;
}

console.log(countVowelConstant(book));
