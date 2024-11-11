{
    // Array
    let numbers : number[] = [ 1, 2, 3, 4];
    let names: string[] =["Emon","Nahia","Arifin","Arafat"];

    //Tuple
    let Tuple : [string,number] =["Emon",2];
  
    //tuple by generic
    function createTuple <X,Y> (first: X, second:Y):[X,Y]{
        return [first,second]
    }
    let Tuple1: [string,number]= createTuple("emon",2);

    //same type tuple 
    function sameTypeTupleGeneric<T,X,Y> (...args:[T,X,...T[],Y]):void{
        console.log(args)
    }
    sameTypeTupleGeneric<number,number,number>(1,2,4,5,6); // T=1,X=2,...T[]=4,5,Y=5, 
    sameTypeTupleGeneric<string,string,string>("Emon","Nahia","Arifin","Rakib","Arafat")

    
  // spread
  let numbers1_ : number[] = [ 1, 2, 3, 4];
  let numbers2_ : number[] = [ 5,6,7,8];
  


    // Array generic
    let bools: Array<boolean> = [true ,false, true,true];

    type genericArray = Array<boolean>
    let bools1: genericArray = [true ,false, true,true];

    type genericArray2<T> = Array<T>
    let bools2: genericArray2<boolean> = [true ,false, true,true];
    let str2: genericArray2<string> = ["Emon","Nahia","Arifin","Arafat"];
    let numbers2 :genericArray2<number> = [ 1, 2, 3, 4];

}