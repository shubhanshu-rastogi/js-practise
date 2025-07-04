const arr = [1,2,3,4,5,6];

for (const val of arr) {
    //console.log(val);
}

const greetings="Hello world!";

for (const greet of greetings) {
    //console.log(`Each character is ${greet}`);
}

const map=new Map();
map.set('IN','India');
map.set('CN','China');
map.set('UK','United Kingdom');


console.log(map);

for (const [key,value] of map) {
    //console.log(value);
    
}

const gameObj={
    js:'Java Script',
    cpp:'C++',
    py:'Python',
    java:'Java'
}

for (const key in gameObj) {
   //console.log(`${key} is the key for ${gameObj[key]}`);
   
}

const coding=["js","ruby","python","java","cpp"];

coding.forEach(function(val){
    //console.log(val);
    
})

coding.forEach((value)=>{
    //console.log(value);
    
})

function printMe(item){
console.log(item);

}
//coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})