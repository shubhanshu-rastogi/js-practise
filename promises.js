const simplePromise=new Promise((resolve,reject)=>
{
    let success=false;

    if (success)
    {
        resolve('The operation was successful');
    }
    else
    {
        reject('The operation failed');
    }
});

simplePromise
    .then(message => {
        console.log(message);
    })
     .catch(error => {
    console.error(error); // This will run if the promise rejects
  });


let namee = "John Doe";
console.log(namee);  // Output: John Doe
console.log(typeof namee);
