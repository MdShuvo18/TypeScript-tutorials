{  

    //Generic
    type arryNumber = number[]
    const arr : arryNumber =[1,2,3,4];
    type arryBoolen = boolean[]
    const arr_ : arryBoolen =[true, false , true , false];
    type arryString = string[]
    const arr__ : arryString =["Rakib","Nahia","Emon","Arafat","Arifain"];
    type arryUndefined = undefined[]
    const arr___ : arryUndefined =[undefined,undefined,undefined];

//    type Arry<parms> = parms[]
       type Arry<T> = T[]
        const arr1 : Arry<number> =[1,2,3,4];
        const arr2 : Arry<string> =["Rakib","Nahia","Emon","Arafat","Arifain"];
        const arr3 : Arry<boolean> =[true, false , true , false];
        const arr4 : Arry<undefined> =[undefined,undefined,undefined];
        const arr5 : Arry<null> =[null,null,null];

        type User = {id: number ; name: string};
        const data4 = {id:4,name:"Emon",role:"Admin"}
        const arr6 :Arry<User> = [
            {id:1,name:"Arifin"},
            {id:2,name:"Arafat"},
            {id:3,name:"Nahia"},
            data4,
        ]



    //Promise
    const myPromise : Promise<string> = new Promise((resolve,reject) =>{
        const data : boolean = false;
        if(data) resolve("Operation successful");
        else reject(new Error("Error"));
    })
    
    // myPromise
    //     .then((result)=>{
    //         console.log(result)
    //     })
    //     .catch((err)=>{
    //             console.log(err.message)
    //     }) 
}