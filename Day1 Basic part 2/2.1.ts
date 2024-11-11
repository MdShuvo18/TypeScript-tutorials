{
    // as  (type Assertion)
    let data : any  = 12232;
    let data1 : unknown  = 12232;
    let lenthof : string = (data1 as number).toString();

    data = "12";
    let res : string = (data as string).toString();

    // console.log(lenthof + "A")

    // as in generic
    function identity <T>( value : T): T {
        return value ;
    }
    
    let resultFun = identity<number>(3);
    let resultFunAS = identity(3) as number;

    let resultFun1 = identity<string>("Emon");
    let resultFun1As = identity("Emon") as string;

    //***** 
    type User = {name:string,id: number}
    let resultFun2 = identity({name:"Shuvo",id: 1})  as User
    let resultFun3 = identity({id: 1})  as User

    let resultFun2_ = identity<User>({name:"Shuvo",id: 1}) 
    // let resultFun3_ = identity<User>({id: 1}) 
    
    console.log(resultFun2);


    // fully clear
    let unKnown : any ;
     
    unKnown = 12;
    const converted : string = (unKnown as number).toString()
    unKnown = false;
    const converted1 : string = (unKnown as boolean).toString()
    unKnown = 'a string';
    const converted2 : number = (unKnown as string).length;


}