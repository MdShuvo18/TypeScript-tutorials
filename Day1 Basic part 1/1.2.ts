{
    // array , object
    type Boolean=boolean[]
    let arr : number[] = [1, 2, 3, 4];
    let boolArr : Boolean=[false, true];
    console.log("This is array",arr);

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