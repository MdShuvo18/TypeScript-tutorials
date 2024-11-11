{
    //================Use of rest parameter==================
    /*
    The rest operator is used to collect multiple elements or arguments into a single array or object.  
     */
    function takeArr(...arr: number[]): number[] {
        return arr;  // Rest parameter to accept multiple arguments and return them as an array
    }
    takeArr(1, 2, 3);
    function takeArr1(arr: number[]): number[] {
        return arr;  // Accepts an array directly
    }
    takeArr1([1, 2, 3]);


    //===========Use of spread Operator==============
   /**
    The spread operator is used to unpack or expand the elements of an iterable (like an array or an object) into individual elements or properties. 
    */
    // Using spread operator to combine arrays
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    // With spread operator, use `concat` to combine arrays
    let combinedArray = [...arr1, ...arr2];  // Spread operator combines two arrays
    console.log(combinedArray);  // [1, 2, 3, 4, 5, 6]


    // Without spread operator, use `concat` to combine arrays
    let combinedArray1 = arr1.concat(arr2);  // Use concat to combine arrays
    console.log(combinedArray1);  // [1, 2, 3, 4, 5, 6]





}