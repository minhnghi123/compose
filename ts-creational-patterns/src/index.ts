import SingleTon from "./creational/signleton";
import AnimalFactory from "./creational/factory";
import Car from "./creational/prototype";
import HouseBuilder from "./creational/builder";

//singleton

const s1 = SingleTon.getInstance();
const s2 = SingleTon.getInstance();
// console.log(s1 === s2);

//Factory

const dog = AnimalFactory.createAnimal("Dog");
// dog.speak();

//Prototype
const myNewCar = new Car("Ferrari");
const myCarClone = myNewCar.clone();
// console.log(myNewCar);
// console.log(myCarClone);

//Builder

const apartment = new HouseBuilder();
const myApartment = apartment.setDoors(2).setWindows(4).setRoof("Flat").build();
// myApartment.show();
