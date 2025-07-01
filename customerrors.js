/*let name="Shubhanshu";

try {
    let user;
    console.log(user.username)
    
} catch (error) {
    console.log("Error caught",error.message)
}*/

class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name="Validation error";
    }
}

function validateName(name){
    if(name.length <3){
        throw new ValidationError("This is a custom error");
    }
}

validateName("S");