let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
 const sortedResult=testResults.reduce((acc,result)=>{
    if(!acc[result]){
        acc[result]=[];
    }
    acc[result].push(result);
    return acc;
 },{});

 console.log(sortedResult);
