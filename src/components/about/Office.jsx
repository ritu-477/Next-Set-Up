import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const Office = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <p className='pt-5 max-w-[700px] text-center mx-auto text-red-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi soluta non cumque enim a quidem sapiente temporibus tenetur, doloremque vel hic ratione officiis! Fuga assumenda nostrum eius debitis id.
            </p>
            <Image
                src="/assets/images/png/cartoon-image.png" 
                width={500}
                height={500}
                alt="Cartoon"
                className='pt-4'
            />
            <Link className='pt-4 font-bold' href="/dashboard">Click</Link>
        </div>
    );
};

export default Office;
