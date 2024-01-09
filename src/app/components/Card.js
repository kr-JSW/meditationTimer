import React from 'react';
import useStore from '../useStore';

const Card = ({ detail, author }) => {
    const { mode } = useStore((state) => state);
    return (
        <div
            className={`rounded-[25px] md:w-[300px] md:h-[300px] w-[250px] h-[250px] ${
                !mode && 'bg-black'
            } bg-white p-[20px] flex flex-col`}
        >
            <div className="flex-[9] flex items-center justify-center text-[18px] text-gray-500">{detail}</div>
            <div
                className={`flex-[1] self-end italic font-mono text-black ${
                    !mode && 'text-white'
                } text-right text-[12px] md:text-[23px]`}
            >
                {' '}
                - {author}
            </div>
        </div>
    );
};

export default Card;
