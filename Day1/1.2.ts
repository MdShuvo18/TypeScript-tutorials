{
    // array , object
    type Number = number[]
    let arr : Number = [1, 2, 3, 4];
    let boolArr : boolean[]=[false, true];

    //Object
    type User  = {
        id:string , 
        name:string,
        email:string,
    }
    interface InterUser {
        id:string , 
        name:string,
        email:string,
    }
    const user :InterUser ={
        id:"945D",
        name:"Rakb",
        email:"emon@gmail.com",
    }

  console.log(user)



}