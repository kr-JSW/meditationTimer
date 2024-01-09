'use client';
import React from 'react';
import { icons } from '../constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStore from '../useStore';

const BottomNav = () => {
    const path = usePathname();
    const { mode } = useStore((state) => state);
    return (
        <nav className="md:hidden bg-fuchsia-200/30 fixed w-full h-[80px] bottom-0 flex items-center justify-center border-t-[1px] border-white">
            <section className={`flex items-center justify-center gap-[50px] ${mode ? 'text-gray-600' : 'text-white'}`}>
                <Link href="/">
                    <div
                        className={`flex flex-col items-center gap-[3px] justify-center font-mono ${
                            path === '/' && 'text-blue-500'
                        }`}
                    >
                        <icons.homeIcon className="text-[30px]" />
                        Home
                    </div>
                </Link>
                <Link href="/timer">
                    <div
                        className={`flex flex-col items-center gap-[3px] justify-center font-mono  ${
                            path === '/timer' && 'text-blue-500'
                        }`}
                    >
                        <icons.clock className="text-[30px]" />
                        Timer
                    </div>
                </Link>
            </section>
        </nav>
    );
};

export default BottomNav;
