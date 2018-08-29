class Vehicle{
    constructor(wheels,manufacture,type){
        this.wheels=wheels;
        this.manufacture=manufacture;
        this.type=type;


    }

    aboutVehicle(){
        console.log(`This vehicle is a ${this.type} made by ${this.manufacture} with ${this.wheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(manufacture,doors,wheels = 4,type='truck'){
        super(wheels,manufacture,type);      
        this.doors=doors;
        this.hasTruckBed=true;
    }
    aboutVehicle(){
        super.aboutVehicle();
        console.log(`This ${this.type} has ${this.doors} doors and ${ this.hasTruckBed ?'has ': 'does not have'} a truckbeds`)
    }


}

class Sedan extends Vehicle {
    constructor(manufacture,size,mpg,wheels = 4,type='sedan'){
        super(wheels,manufacture,type);
        this.size=size;
        this.mpg = mpg;
    }
    aboutVehicle(){
        super.aboutVehicle();
        console.log(`This is a ${this.size} ${this.type} with ${ this.mpg} mile per gallon`)
    }
}

class Motorcycle extends Vehicle{
    constructor(manufacture,wheels=2,type='motorcycle'){
        super(wheels,manufacture,type);  
        this.hasDoors=false;
        this.hasHandleBar=true;
    }
    aboutVehicle(){
        super.aboutVehicle();
        console.log(`This ${this.type} ${this.hasDoors ? 'has door':'does not have doors'} and it ${ this.hasHandleBar ?'has handle bars': 'has steering wheel'}`)
    }
}

let v1 = new Vehicle(4,'Toyota','car')
let truck1 = new Truck('Chevrolet',2);
let truck2 = new Truck('GEM',4);
let sedan1 = new Sedan('Honda','small',36);
let sedan2 = new Sedan('Cadillac','medium',27);
let motorcycle1 = new Motorcycle('Suzuki');
let motorcycle2 = new Motorcycle('Harley')
let vehicles=[v1,truck1,truck2,sedan1,sedan2,motorcycle1,motorcycle2];
    
for(let vehicle of vehicles){
    vehicle.aboutVehicle();