{
    

     
    // Call by Reference: Modifies the original object directly
    function callByRef(val1: { num: number }): number {
        val1.num = 1;  // Modifies the original object
        return val1.num;
    }

    // Call by Value: Clones the object to prevent modifying the original
    function callByValue(...val1: { num: number }[]): number {
        const clonedVal = { ...val1[0] };  // Create a shallow copy of the first object in the array
        clonedVal.num = 1;  // Modify the copy
        return clonedVal.num;  // Return the modified copy's num value
    }

    function main() {
        // Call by Reference: Object will be modified
        let val1 = { num: 100 };

        console.log("Before callByRef:");
        console.log("Original val1:", val1.num);  // 100

        let refResult = callByRef(val1);  // Modify the original object
        console.log("After callByRef:");
        console.log("Returned from callByRef:", refResult);  // 1
        console.log("Original val1 after callByRef:", val1.num);  // 1 (Modified)

        console.log("\nBefore callByValue:");
        console.log("Original val1:", val1.num);  // 1 (after callByRef)

        let valueResult = callByValue(val1);  // Pass by value (cloning the object)
        console.log("After callByValue:");
        console.log("Returned from callByValue:", valueResult);  // 1 (Modified inside the function)
        console.log("Original val1 after callByValue:", val1.num);  // 1 (Unchanged by callByValue)
    }

    main();
}