function greeter (name,callback){
    console.log(`Hello, ${name}`);
    callback();
}

function sayGoodBye(){
    console.log("Goodbye");
}

greeter("Alice",sayGoodBye);