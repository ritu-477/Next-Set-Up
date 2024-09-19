
"use client"
import { useState } from 'react';

const Hero = () => {
   
    const [count, setCount] = useState(0);
    const [changeValue, setValue] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className='flex justify-center text-center items-center py-9'><p className='p-4 w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7'>{count}</p></div>
            <div>
                <button className='p-4 w-[150px] bg-purple-400 border rounded-xl text-white font-medium text-2xl mr-6' onClick={() => setCount(count + 1)}>Add</button>
                <button className='p-4 w-[150px] bg-red-400 border rounded-xl text-white font-medium text-2xl mr-6' onClick={() => setCount(count - 1)}>Subtract</button>
                <button className='p-4 w-[150px] bg-green-400 border rounded-xl text-white font-medium text-2xl mr-6' onClick={() => setCount(count * 2)}>Multiple</button>
                <button className='p-4 w-[150px] bg-blue-400 border rounded-xl text-white font-medium text-2xl mr-6' onClick={() => setCount(count / 2)}>Divide</button>
            </div>
            <h2
                className={`p-4 w-[200px] bg-yellow-500 border rounded-xl font-semibold text-xl text-center my-7 ${changeValue ? 'text-black' : 'text-red-500'
                    }`}
            >
                {changeValue ? 'Ritu' : 'Johar'}
            </h2>
            {/* <h2 className='p-4 w-[200px] bg-yellow-500 border rounded-xl font-semibold text-xl text-center my-7'> {changeValue ? "Ritu" : "Johar"}</h2> */}

            <button className='p-4 w-[200px] bg-black border rounded-xl text-white font-medium text-2xl' onClick={() => setValue(!changeValue)}>Change Value</button>

        </div>
    );
};

export default Hero;

