function Person(name,age){
    this.name=name;
    this.age=age;
}

const Ali=new Person("Ali khan",35);

console.log(Ali.name);
console.log(Ali.age);

class Car{
    constructor(name,brand){
        this.name=name;
        this.brand=brand;
    }
}

const maruti=new Car("Dzire","Suzuki");

console.log(maruti.name);
console.log(maruti.brand);