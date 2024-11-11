{
    //fucntion

    function sum (a: number,b?:number,c?:number):number{
        return a + (b || 0) + (c || 0)
    }
    const data1 = sum(1);
    const data2 = sum(1,3);
    const data3 = sum(1,3,2);


    function sum1 (a: number,b = 0,c = 0):number{
        return a + (b || 0) + (c || 0)
    }
    const data1_ = sum1(1);
    const data2_ = sum1(1,3);
    const data3_ = sum1(1,3,2);
 


    


}