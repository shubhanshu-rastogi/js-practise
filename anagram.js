const input = ["listen", "silent", "enlist", "rat", "tar", "art", "hello"];

const grouped=input.reduce((acc,word)=>{

    const key=word.split('').sort().join('');

    if(!acc[key]){
        acc[key]=[];
        }
    
        acc[key].push(word);
        return acc;

},{});

const values=Object.values(grouped);

console.log(values);