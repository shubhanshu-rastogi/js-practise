function factorial(num){
    if (num===0 || num ===1) return 1;

    return num * factorial(num-1);
}

console.log(factorial(5));

const arr = [4, 17, -3, 22, 8];

console.log(Math.max(...arr));
console.log(Math.min(...arr));

const arr1 = [1,1,2,3,3,4,4,5,6];

const unique=[...new Set(arr1)];

//console.log(unique);

const nested = [1, [2, [3, [4]], 5]];

const flat=nested.flat(Infinity)

//console.log(flat);

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

//console.log(countVowels("JavaScript is awesome")); 


function capitalizedWords(str){
    return str.split(' ')
    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
    .join(' ');
}


//console.log(capitalizedWords('hello world from javascript'));

function findLongestWord(str){
    const words=str.split(' ');
    return words.reduce((longest,current) =>
        current.length > longest.length ? current : longest
    ,'')
}

//console.log(findLongestWord('JavaScrip is powerful and expressive'));


//const arraey = [1,2,3,5,6,9,7];

function sumArray(arr){
    return arr.reduce((sum,num) => sum+num,0);
}

//console.log(sumArray(arraey));

function countChars(str){
    const count = {};

    for (let char of str){
        count[char]= (count[char] || 0) + 1;
    }
    return count;
}

//console.log(countChars("Hello"));

const arr2=[2,4,6,7,8,9]
console.log(arr2);
const set2 = new Set(arr2);
console.log(set2);

function shuffleArray(arr) {
  const copy = arr.slice(); // Avoid mutating original array
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));