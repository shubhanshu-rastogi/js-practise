const charString='asdskajdfbsabfakflkaflkjasfl';

function charOccuranceCount(str){
    const result = {};

    for(let char of str){
        if(char != ' '){
            result[char]=(result[char] || 0) + 1;
        }
    }

    return result;
}

const res=charOccuranceCount(charString);


for (let char in res){
    console.log(`Character ${char} appeared ${res[char]} times`);
    
}