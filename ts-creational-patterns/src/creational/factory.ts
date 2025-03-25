interface IAnimal {
  speak(): void;
}

class Dog implements IAnimal {
  //override super class method
  public speak(): void {
    console.log("The dog says: Bow-Wow");
  }
}

class Cat implements IAnimal {
  //override super class method
  public speak(): void {
    console.log("The cat says: Meow");
  }
}

class AnimalFactory {
  public static createAnimal(type: string): IAnimal {
    switch (type) {
      case "Dog":
        return new Dog();
      case "Cat":
        return new Cat();
      default:
        throw new Error("Animal type : " + type + " cannot be created");
    }
  }
}
export default AnimalFactory;
