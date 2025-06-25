const items = [
  { name: "Item1", category: "A", score: 80 },
  { name: "Item2", category: "A", score: 70 },
  { name: "Item3", category: "B", score: 60 },
  { name: "Item4", category: "B", score: 90 }
];

const grouped=items.reduce((acc,item)=>{

  const cat=item.category;

  if(!acc[cat]){
    acc[cat]={total:0,count:0};
  }

  acc[cat].total += item.score;
  acc[cat].count +=1;
  return acc;
},{});

const averages={};

for(const cat in grouped){
  averages[cat]=grouped[cat].total/grouped[cat].count;
}

console.log(averages);