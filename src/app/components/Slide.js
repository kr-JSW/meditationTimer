'use client';
import React, { useState } from 'react';
import Card from './Card';
import { icons } from '../constants';
import useStore from '../useStore';

const Slide = ({ arr }) => {
    const arrCount = arr.length;
    const [count, setCount] = useState(1);
    const { mode } = useStore((state) => state);
    return (
        <div className={`flex items-center gap-[10px] relative md:w-[600px] md:h-[350px] h-[150px] w-[400px] `}>
            <icons.left
                className={`md:text-[50px] text-[100px] cursor-pointer ${
                    count === 1 && 'text-gray-500 pointer-events-none'
                } z-[10]
                ${mode ? '' : count === 1 ? 'text-gray-500' : 'text-white'}
                `}
                onClick={() => setCount(count - 1)}
            />
            <div className=" flex w-[500px] h-[250px] md:h-auto justify-center">
                {arr.map((item, idx) => {
                    idx = idx + 1;
                    return (
                        <div
                            style={{
                                transform: `${
                                    count - 1 === idx
                                        ? 'perspective(1200px) rotateY(30deg) translateZ(-300px) translateX(100px) '
                                        : count + 1 === idx
                                        ? 'perspective(1200px) rotateY(-30deg) translateZ(-300px)  translateX(-100px)'
                                        : ''
                                }`,
                            }}
                            className={`${
                                count === idx
                                    ? 'block z-[90] absolute left-[50%] translate-x-[-50%] border-[2px] rounded-[35px]'
                                    : count - 1 === idx
                                    ? ' blur-[2px] absolute md:static md:block hidden'
                                    : count + 1 === idx
                                    ? ' blur-[2px] absolute md:static md:block hidden'
                                    : 'hidden'
                            }  transition duration-700`}
                            key={idx}
                        >
                            <Card detail={item.detail} author={item.author} />
                        </div>
                    );
                })}
            </div>
            <icons.right
                className={`md:text-[50px] text-[100px]  cursor-pointer ${
                    count === arrCount && 'text-gray-500 pointer-events-none'
                } z-[10]   ${mode ? '' : count === arrCount ? 'text-gray-500' : 'text-white'}`}
                onClick={() => setCount(count + 1)}
            />
        </div>
    );
};

export default Slide;
