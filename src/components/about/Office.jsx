import React from 'react';
import Image from 'next/image';

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
                className='pt-4 pointer-events-none'
            />
        </div>
    );
};

export default Office;
