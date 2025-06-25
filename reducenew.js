// const words = ["apple", "banana", "apricot", "blueberry", "cherry"];

// const grouped=words.reduce((acc,word)=> {
// const firstLetter=word[0].toLowerCase();

// if(!acc[firstLetter]){
//     acc[firstLetter]=[];
// }
// acc[firstLetter].push(word);
// return acc;

// },{});

// console.log(grouped);

const animals = ["cat", "dog", "cat", "bird", "dog", "cat","dog","dog"];

const frequencyMap=animals.reduce((acc,animal)=>{
    acc[animal]=(acc[animal] || 0)+1;
    return acc;
    }
    ,{});

    let mostFrequentWord="";
    let maxCount=0;

    for (const animal in frequencyMap){
        if(frequencyMap[animal]>maxCount){
            maxCount=frequencyMap[animal];
            mostFrequentWord=animal;
        }
    }

console.log(mostFrequentWord);

const students = [
  { name: "Alice", score: 91 },
  { name: "Bob", score: 88 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 85 }
];

const topTwo = students
  .sort((a, b) => b.score - a.score)   // sort descending by score
  .slice(0, 2)                         // take top 2 students
  .map(student => student.name);      // extract names

console.log(topTwo);