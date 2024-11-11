{   

    function takeArr(...arr: number[]): number[]{
        return arr
    }
    takeArr(1,2,3);
    function takeArr1(arr: number[]): number[]{
        return arr
    }
    takeArr1([1,2,3]);


    //call by value and refferace
      function callByRef ( val1 : {num: number}) : number{
          val1.num= 1;
          return val1.num 
      }
      function callNotByRef(val1: {num: number}[]): number {
          //copy=clonedVal   || clonedVal = { num : 100}
          const clonedVal = {...val1[0]};  
          clonedVal.num = 1;  
          return clonedVal.num; 
      }

    
   
      function main(){
  
          //call by ref
          let val1 = { num : 100}

          let notChange = callByRef(val1)
          
          //{ num : 100},{ num : 40} ,{ num : 100}
          let data1 = callNotByRef([val1])
          console.log(data1);
          console.log(val1.num);
          return 0;
      }
  
      main();
}