{
    /*
    1. Complex Object Structure with Type Inference
Problem: Create a function processUserData that takes an object with name, age, address, and an optional contact property, which can be null. Process the contact property accordingly if provided.
     */
    type User ={
        name: string,
        age: number,
        readonly address:string,
        contract?:string | null
    }
    const processUserData = (obj : User):number=>{
        if(obj.contract){
            return 1;
        }
        if(obj.contract ===null){
            return 2;
        }
        if(obj.contract ===undefined){
            return 3;
        }
        return 0;
    }
    const user: User ={
        name:"Emon",
        age:25,
        address:"Gulshan",
        contract : null
    }
    const res = processUserData(user);
    console.log(res)
}