{
    const l1 = () =>{
        setTimeout(()=>{
            console.log("Hi this is l1");
        },2000)
        console.log("Hi this is l1 outside of l1");
    }
    const l2 = () =>{
        console.log("data")
        setTimeout(()=>{
            console.log("Hi this is l2");
        },2000)
    }
    const l3 = () =>{
            console.log("Hi this is l3");
    }
    const data  = async () =>{
         await l1();
         await l3();
         await l2();
    }

    // data();



    
}