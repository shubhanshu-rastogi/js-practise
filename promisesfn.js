const myPromise = new Promise((resolve, reject) => {
  const success = true;
  success ? resolve("✅ Operation successful!") : reject("❌ Operation failed!");
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));

  function fetchData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({name:"Alice",age:20});
        },1000);
    });
  }

  fetchData().then(a=> console.log("user:",a));