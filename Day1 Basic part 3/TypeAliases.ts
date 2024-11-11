{
    //Type Aliases
     type strOrNum = string | number
     let val : strOrNum = "EMon";
     let val2 : strOrNum = 2;

     //working with type aliases
     type Status =  "pending" | "done"
     const data  : Status = "pending"

    // Working with union type
    let Status1 : "pending" | "done" | "failed"=  "done" 
     data1  : Status1 = "done"




     type AddFun = (a: number , b : number)=> number;
     const add : AddFun = (a,b)=> a + b;
     const res1 = add(1,2);
    //  console.log(res1)

    type Pair = [string,number];
    let pari: Pair = ['age',23];

    type isAdmin = string | boolean;
    let isAdmin = "admin";
    let isAdmin1 = true;

}