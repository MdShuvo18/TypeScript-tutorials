{
    // Keyof
    interface User {
        User : string;
        Admin : string;
        Moderator: string;
    }

    //without keyof
    type status   = "User" | "Admin" | "Moderator";
    const Satus1 : status = "Moderator"

   // with kwyof
    type status1 = keyof User;
    const Status2 : status1 = "Admin"


    //In interface keyof
    interface Student {
        id:number;
        name:string
    }
    interface Teacher {
        _id:number;
        _name:string
    }
   function getName(obj : Teacher, key: keyof Teacher){
    return obj[key]
   }
   function getName1(obj : Student, key: keyof Student){
    return obj[key]
   }
    
    const student : Student = {id:12 , name: "Arifin"};
    const changeName = getName1(student,"id");
    // console.log(changeName)

    const teacher : Teacher = {_id:1, _name:"Shuvo"}
    const changeName1 = getName(teacher,"_id");



    //In interface keyof for generics
    
   function getName_<T , K extends keyof T>(obj : T, key: K): T[K]{
    return obj[key]
   }
   
    const student_ : Student = {id:12 , name: "Arifin"};
    const changeName_ = getName_(student_, "id");
    console.log(changeName_)

    const teacher_ : Teacher = {_id:1, _name:"Shuvo"}
    const changeName1_ = getName_(teacher_,"_id");
    console.log(changeName1_)
    


}