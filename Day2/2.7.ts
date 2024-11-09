{// Polymorphism 
    class Animal {
        makeSound(): void {
            console.log("Some generic animal sound");
        }
    }

    //overriding makeSound()
    class Dog extends Animal {
        makeSound(): void {
            console.log("Vaw!!");
        }
    }

    //  overriding makeSound()
    class Cat extends Animal {
        makeSound(): void {
            console.log("Mew!!");
        }
    }

    // Polymorphism 
    const dog: Animal = new Dog();  
    dog.makeSound();  // Output: Vaw!!

    const cat: Animal = new Cat();  
    cat.makeSound();  // Output: Mew!!

}