import { useState } from 'react';
type User ={
    id:number;
    name: string
}
const users : User[]=[
    {
        id:1,
        name:"Arifin",
    },
    {
        id:2,
        name:"Emon",
    },
    {
        id:3,
        name:"Shuvo",
    },
    {
        id:4,
        name:"Nahia",
    },
]
const Component5 = () => {
    const [allUser,setAllUser] = useState<User[]>(users)
    console.log(allUser)

    return (
        <> 
            <div className='w-1/3 m-auto bg-red-500 h-44'>
                <button onClick={() => {
                  setAllUser([...users,{id:5,name:"Rakib"}])

                }} className='btn bg-white border-2 p-2 '>Click</button>
                
            </div>
        </>
    );
};

export default Component5;
