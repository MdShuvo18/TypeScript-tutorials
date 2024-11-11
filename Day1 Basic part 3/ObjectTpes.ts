{
    type User1 = {
        readonly id: number;
        name: string;
        add(a:number, b:number): number;
        address?:string
    }
    interface AddExtra1{age: number}
    type Teacher1 = User1 & { salary: number}
    type Teacher1_ = User1 & AddExtra1
    

    

    interface User2  {
        readonly id: number;
        name: string;
        location?:string
    }
    type AddExra2 ={
        salary: number
    }
    interface Teacher2 extends AddExra2 {
        dataBase: string
    }
    // insterface and type aliaes
    interface Teacher3 extends User1 {
        dataBase: string
    }
   
}