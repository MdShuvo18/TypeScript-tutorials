{
    // Fucntion 4 types
    //1.return + parameter
    //2.No return + parameter
    //3.no return + no parameter
    //4.return + no parameter

    //1.return + parameter
    const returnParameter =(num1 : number): number=>{
        return num1 + 1 ;
    }
    let type1 = returnParameter(1);


    //2.No return + parameter
    const noReturnParameter=(num1 : number): void=>{
        console.log(num1 + 1)
    }
    noReturnParameter(1);


    //3.no return + no parameter
    const noReturnNoParameter=(): void=>{
        //work
        let num1: number = 1;
        console.log(num1 + 1)
    }
    noReturnNoParameter();

    //4.return + no parameter
    const returnNoParameter =(): number=>{
        //Work
        let num1: number = 1;
        return num1 + 1 ;
    }
    let type4 = returnNoParameter();

    //Recursion
    // self calling fucntion 
    const rec =(n: number)=>{
        //base case 
        if(n==0) return ;
        //working 
        console.log(n)
        rec(n-1);
    }

}