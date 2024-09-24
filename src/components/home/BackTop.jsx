"use client"
import React, { useEffect, useState } from 'react';

export const BackTop = () => {
    const [visible, setvalue] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > 200) {
            setvalue(true);
        } else {
            setvalue(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <div className='relative'>
            <a href=''
                className='border border-black p-4 absolute bottom-4 right-4'
                onClick={scrollToTop}
            >
                Back to Top
            </a>
        </div>
    );
};

export default BackTop

