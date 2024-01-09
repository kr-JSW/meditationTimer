'use client';
import React, { useEffect } from 'react';
import { logo, icons, backImages } from '../constants';
import useStore from '../useStore';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TopNav = () => {
    const { mode, changeMode, modeBackgroundChange } = useStore((state) => state);
    useEffect(() => {
        modeBackgroundChange();
    }, [mode]);

    const path = usePathname();

    return (
        <nav className="w-full h-[80px] bg-fuchsia-200/30 md:px-[100px] px-[20px] flex justify-between items-center fixed z-[99] shadow-white shadow-sm">
            <section className="flex gap-[10px] items-center">
                <div
                    style={{ backgroundImage: `url(${logo})` }}
                    className="w-[60px] h-[60px] bg-contain rounded-[50%]"
                />
                <div className="text-[20px] font-bold font-안쌍체 bg-gradient-to-r from-teal-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                    비우는 시간
                </div>
            </section>

            <section className="flex gap-[20px] items-center">
                <Link
                    href="/"
                    className={`flex flex-col items-center gap-[3px] justify-center font-mono  ${
                        path === '/' && 'text-blue-500'
                    }`}
                >
                    <div className="md:block hidden">Home</div>
                </Link>
                <Link
                    href="/timer"
                    className={`flex flex-col items-center gap-[3px] justify-center font-mono  ${
                        path === '/timer' && 'text-blue-500'
                    }`}
                >
                    <div className="md:block hidden">Timer</div>
                </Link>

                <div className="h-[40px]  flex items-center relative">
                    <div
                        style={{ backgroundImage: `${mode ? `url(${backImages.light})` : `url(${backImages.dark})`}` }}
                        className="rounded-[30px] w-[80px] h-[30px] bg-white bg-cover"
                    >
                        <div
                            className={`w-[35px] h-[35px] rounded-[50%] ${
                                mode ? 'bg-amber-300 ' : 'bg-gray-500 translate-x-[50px]'
                            } absolute top-[50%] translate-y-[-50%] cursor-pointer transition`}
                            onClick={changeMode}
                        >
                            {mode ? (
                                <icons.light className="w-[35px] h-[35px] text-white" />
                            ) : (
                                <icons.dark className="w-[35px] h-[35px] text-white" />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default TopNav;
