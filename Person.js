//Create Person objects using object literal format
/* let person1 ={
    name:'Charles',
    sayhello:function(){
      console.log(`Hello! My name is ${this.name}`);
    }
};
let person2 ={
    name:'Jemma',
    sayhello:function(){
      console.log(`Hello! My name is ${this.name}`);
    }
};
let person3 ={
    name:'Kim',
    sayhello:function(){
      console.log(`Hello! My name is ${this.name}`);
    }
};
let person4 ={
    name:'Amanda',
    sayhello:function(){
      console.log(`Hello! My name is ${this.name}`);
    }
};
let person5 ={
    name:'Kenji',
    sayhello:function(){
      console.log(`Hello! My name is ${this.name}`);
    }
};


person1.sayhello();
person2.sayhello();
person3.sayhello();
person4.sayhello();
person5.sayhello();
 */


 //Pseudo class representation of person object
function Person(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
    

}

Person.prototype.sayHello=function(){
    console.log(`Hello! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);
};


let p1 = new Person('Charles','30','Raleigh');
let p2 = new Person('Jemma','18','Tuscon');
let p3 = new Person('Kim','27','Greenvile');
let p4 = new Person('Amanda','65','Baltimore');
let p5 = new Person('Kenji','35','St. Louis');

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello()

/* Class covention to create Person objects 
class Person {
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;

    }

    sayhello(){
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);
    }

}

let p1 = new Person('Charles','30','Raleigh');
let p2 = new Person('Jemma','18','Tuscon');
let p3 = new Person('Kim','27','Greenvile');
let p4 = new Person('Amanda','65','Baltimore');
let p5 = new Person('Kenji','35','St. Louis');

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello()

*/


