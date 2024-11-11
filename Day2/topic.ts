{
    /**
     * Class 
     * Object
     * Constructor
     * inheritance
     * Encaptulation
     * Abstraction
     * Polymorphism 
     * (I give a overview on the Difference Between Polymorphism and Abstraction bellow    )
                                        ||
                                        ||
                                        ||
                                        \/
     */

}
{
    //========  Difference Between Polymorphism and Abstraction ====
    /*
    ***1. ____________ Abstraction __________________

        What it is: Abstraction is about hiding unnecessary details and exposing only the essential features or functionalities of an object. It lets you focus on what an object does, rather than how it does it.

        How it's used: It allows you to define a blueprint or a contract for other classes to follow, but doesn't implement the details. 
        In TypeScript, this is often done using abstract classes or interfaces.

        Example:You might have an abstract Shape class with a method area(). The Shape class only defines that area() exists, but does not specify how it is calculated. It's up to the subclasses like Circle or Rectangle to define the specific way the area is calculated.

     */
    // Abstraction example :
    //( Key idea: "What the object does" )
        abstract class Shape {
            abstract area(): number;
        }
        
        class Circle extends Shape {
            constructor(private radius: number) {
                super();
            }
            area() {
                return Math.PI * this.radius * this.radius; // Circle's implementation of area
            }
        }


         /*
    ***1. ____________ Polymorphism __________________

        What it is: Polymorphism allows different objects to be treated as instances of the same class (or interface) but behave differently based on their actual type. It’s the concept of one method doing different things based on the object calling it.

        How it's used: With polymorphism, you can use the same method or function name to perform different operations based on the type of object. The method call dynamically resolves to the correct implementation based on the object’s type.

        Example: You can have a method makeSound() in a Animal class. Both Dog and Cat classes inherit from Animal and provide their own implementation of makeSound(). When you call makeSound() on a Dog or Cat object, the correct method is executed based on the actual object type.

     */
        //Polymorphism example :
        //(Key idea: "How the object behaves" )
        class Animal {
            makeSound(): void {
                console.log("Some generic sound");
            }
        }
        
        class Dog extends Animal {
            makeSound(): void {
                console.log("Bark!");
            }
        }
        
        class Cat extends Animal {
            makeSound(): void {
                console.log("Meow!");
            }
        }
        
        let myDog = new Dog();
        let myCat = new Cat();
        
        myDog.makeSound();  // "Bark!"
        myCat.makeSound();  // "Meow!"
        
        

}