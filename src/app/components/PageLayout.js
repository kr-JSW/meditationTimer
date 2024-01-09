'use client';
import React from 'react';
import useStore from '../useStore';

function PageLayout({ children }) {
    const { modeBackground } = useStore((state) => state);
    return (
        <div className="bg-fixed bg-cover bg-center bg-inherit" style={{ backgroundImage: `url(${modeBackground})` }}>
            <div className="bg-inherit flex flex-col items-center w-full ">{children}</div>
        </div>
    );
}

export default PageLayout;
