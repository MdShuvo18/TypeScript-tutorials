{
    //inheritance
    class Bank{
         id: number ;
         name: string ;
         ammount: number ;
        constructor ( id: number ,  ammount: number ,  name: string){
            this.id = id;
            this.name = name;
            this.ammount = ammount
        }
    }
    class Student extends Bank {
        age : number
        constructor( id: number ,  ammount: number ,  name: string , age: number){
           super(id,ammount,name);
           this.age = age
        }
    }
    class Teacher extends Bank {
        school : string
        constructor( id: number ,  ammount: number ,  name: string , school: string){
           super(id,ammount,name);
           this.school = school
        }
    }

    const student1 = new Student(12,12000,"Emon",23);
    const teacher1 = new Teacher(12,12000,"Emon","Gulshan model shool");
}