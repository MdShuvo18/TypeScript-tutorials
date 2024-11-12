import { useState } from "react";

type User ={
    name: string;
    email: string
}
const Component8 = (): JSX.Element => {

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
      
       //way 1
    //    const fromData = new FormData(e.target as HTMLFormElement)
    //    const text1 : string = fromData.get('name') as string
    //    console.log(text1)
    //    const text2 : string = fromData.get('email') as string
    //    console.log(text2)
    //    let user:  User ={name: text1 , email : text2}
    //    console.log(user)


    // way 2

    const forData = new FormData(e.currentTarget);
    const data = Object.fromEntries(forData) ;
    console.log(data);
    };

    return (
        <div className="w-1/2 border-4 bg-green-600 m-auto p-12">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="p-2 m-2 border rounded"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="p-2 m-2 border rounded"
                />
               
                
                <button type="submit" className="btn bg-red-500 text-white p-2 m-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Component8;
