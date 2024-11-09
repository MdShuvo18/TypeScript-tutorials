{
    //Encaptulation
    class Bank {
        readonly id: number;
        name: string;
        protected __ammount: number;
        constructor(id: number, ammount: number, name: string) {
            this.id = id;
            this.name = name;
            this.__ammount = ammount
        }
        
        // getter and setter
        get amounts(): number{
            return this.__ammount;
        }
        
        set newAmmount(ammount :number) {
             this.__ammount += ammount;
        }

    }
    class Student extends Bank {
        age: number
        constructor(id: number, ammount: number, name: string, age: number) {
            super(id, ammount, name);
            this.age = age
        }
        

    }


    const student1 = new Student(12, 12, "Emon", 23);
    student1.newAmmount=12000;
    console.log( student1.amounts)
}