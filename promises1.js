const Promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

Promise1.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 is pending");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 is resolved");
})

const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"Chai",email:"Chaiaurcode@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Shubhanshu", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }
    },1000)
})

const username=promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('The promise is either resolved or rejected');
})




