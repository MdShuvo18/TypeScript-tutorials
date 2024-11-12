import { useState } from "react";

const Component7 = () : JSX.Element => {
    const [test,setText] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit =(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
    }
    return (
        <div className="w-1/2 border-4 bg-green-600 m-auto p-12">
            <form >
                {/* <input 
                onChange={(e)=> setText(e.target.value)}
                type="text" name="name" id="" /> */}
                <input 
                type="email" 
                className="text-black"
                value={email} 
                onChange={handleSubmit}
                name="email"  />
                <button type="submit" className="btn bg-red-500 text-white p-2 m-2"> Submit</button>
            </form>
        </div>
    );
};

export default Component7;