{

    class User {
    //   public data : string ;
    //   public id   : string ;
      constructor( public name: string , public email : string){
        // this.data = name;
        // this.id = email
      }
    }
    
    const student1 = new User("Emon","emon@gmail.com"); 
    // console.log(student1.name)
    // console.log(student1.email)
    student1.name = "Rakib";




    //Example:

    class Teacher {
        constructor(public readonly id:number, public name: string ){}
        getName ():void{
            console.log( this.name );
        }
        getNameByReturning ():string{
            return( this.name );
        }
        getNameByParameter (newId : number){
        //   this.id = newId
          console.log(this.id)
        }
    }

    //instance
    const teacher1 = new Teacher(12,"Rahim");
    teacher1.getNameByParameter(2);
    const teacher2 = new Teacher(13,"Karim");
    teacher2.getNameByParameter(1);

}