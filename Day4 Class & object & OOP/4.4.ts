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
        //this is for stuff
        protected deposite(ammount: number) {
            this.__ammount += ammount
            return true
        }
        

    }
    class Student extends Bank {
        age: number
        constructor(id: number, ammount: number, name: string, age: number) {
            super(id, ammount, name);
            this.age = age
        }
        depositeByStudent(money : number){
            return this.deposite(money);
        }
        
        seeStudentAmmount() {
            return this.__ammount
        }

    }


    const banker = new Bank (1, 11200, "Arifin"); //banker

    const student1 = new Student(12, 12, "Emon", 23);
    const res = student1.depositeByStudent(10000);
    // console.log(res);
    const res1 = student1.seeStudentAmmount();
    console.log(res1)

}