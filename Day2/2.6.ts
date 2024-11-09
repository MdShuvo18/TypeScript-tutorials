{
    //Abstract
    abstract class Animal {
       abstract makeSound(): void;
    
    }
    class Dog extends Animal {
      makeSound(): void {
          console.log("Vaw!!");
      }
    }
    class Cat extends Animal {
      makeSound(): void {
          console.log("Mew!!");
      }
    }

    const parshian = new Dog;
    parshian.makeSound();
    const boolDog = new Dog;
    boolDog.makeSound();

}