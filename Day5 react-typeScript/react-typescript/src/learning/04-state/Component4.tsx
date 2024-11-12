import { useState } from 'react';

const Component4 = () => {
    const [list, setList] = useState<string[]>([]);
    const [list1, setList1] = useState<number[]>([]);
    return (
        <> 
            <div className='w-1/3 m-auto bg-red-500 h-44'>
                <button onClick={() => {
                    setList(["Rakib", "Rasib"]);
                    setList1([1,2]);

                }} className='btn bg-white border-2 p-2 '>Click</button>
                <h1>
                    {list1.map((num, index) => (
                        <span key={index}>{num} </span>
                    ))}
                </h1>
            </div>
        </>
    );
};

export default Component4;
