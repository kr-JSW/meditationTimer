'use client';
import React from 'react';
import useStore from '../useStore';

const Layout = ({ children }) => {
    const { modeBackground, mode } = useStore((state) => state);

    return (
        <div
            className=" w-full h-screen bg-cover bg-center bg-fixed "
            style={{ backgroundImage: `url(${modeBackground})` }}
        >
            <div className={`  pt-[80px] ${mode ? 'bg-white/40' : 'bg-black/40 text-white'}`}>{children}</div>
        </div>
    );
};

export default Layout;
