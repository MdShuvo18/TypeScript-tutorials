{
    //union  ... rest / spread

    let boys : string[] =['Emon',"Arifin","Shuvo"];
    let girls : string[] =['Sadia',"Nahiya","Nasir"];
    const allData =[...boys,...girls];
    // console.log(allData)

    const printfAll =(...args:string[])=>{
        // args.forEach(arg=> console.log(arg))
    }
    printfAll('Emon',"Arifin","Shuvo");



    const auth: string  ='';
    const validation = auth ? auth : "Guest";
    // console.log(validation)

    let status :'pending' | "success" | "error"= "pending";
    status ="error";

    let role :'admin' | "moderator" | "user"= "user";
    role ="admin";
    console.log(role)




}