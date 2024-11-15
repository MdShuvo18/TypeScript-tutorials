{
    //Promise
    const myPromise : Promise<string> = new Promise((resolve,reject) =>{
        const data : boolean = false;
        if(data) resolve("Operation successful");
        else reject(new Error("Error"));
    })
    
    myPromise
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
                console.log(err.message)
        })



    // Stage - 1
    type User ={ id : number ; name : string} //object type
    // type FetchUser = ()  => User; // fuction type
    
    const fetchUser  = () : Promise<User>  =>{
     return new Promise((resolve ,reject) =>{
         resolve({id: 1, name:"emon khan"});
     }) ; 
    }

    fetchUser()
    .then((result)=> console.log(result))
    .catch((err=> console.log(err)))



    //reusable state 2 with generic
    const ReturnData  = <T>(data: T) : Promise<T>  =>{
     return new Promise((resolve ,reject) =>{
         resolve(data);
     }) ; 
    }

    // type User ={ id : number ; name : string} //object type
    ReturnData<User>({id: 1, name:"emon khan"})
    .then((result)=> console.log(result))
    .catch((err=> console.log(err)))
  
    ReturnData<number>(1)
    .then((result)=> console.log(result))
    .catch((err=> console.log(err)))
  
  

 }