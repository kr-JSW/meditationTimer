'use client';
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import { water } from '../constants';
import { icons } from '../constants';

const Page = () => {
    const [time, setTime] = useState(30);
    const [start, setStart] = useState(false);
    const [soundSwitch, setSoundSwitch] = useState(false);

    const timeConverter = () => {
        let second = time % 60;
        let minute = Math.floor(time / 60);
        let hour = Math.floor(time / 3600);

        minute = minute - 60 * hour;

        if (second < 10) second = '0' + second;
        if (minute < 10) minute = '0' + minute;

        return (
            <div className="flex">
                <div className={`${hour === 0 ? 'hidden' : 'block'}`}>0{hour}&nbsp;:</div>
                <div>{minute}&nbsp;:&nbsp;</div>
                <div>{second}</div>
            </div>
        );
    };

    useEffect(() => {
        const waterAudio = new Audio(water);

        if (soundSwitch) {
            const intervalId = setInterval(() => {
                waterAudio.play();
            }, 1);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [soundSwitch]);

    useEffect(() => {
        let timeInterval;
        if (start) {
            timeInterval = setInterval(() => {
                if (time > 0) {
                    setTime((prev) => {
                        if (prev > 0) {
                            return prev - 1;
                        } else {
                            setSoundSwitch(false);
                            setStart(false);
                            return prev;
                        }
                    });
                }
            }, 1000);
            return () => clearInterval(timeInterval);
        }
    }, [start]);

    return (
        <PageLayout>
            <div className="h-[calc(100vh-80px)] flex justify-center items-center">
                <section className="relative p-[20px] flex flex-col justify-center items-center border rounded-[50px] backdrop-blur-sm bg-gradient-to-r from-emerald-400/20 via-fuchsia-300/30 to-violet-500/40">
                    <div className="font-clockicons text-[50px] md:text-[100px]">{timeConverter()}</div>
                    <div className="md:w-[600px] md:h-[100px] w-[320px] h-[50px] border border-white rounded-[50px] bg-black/40 flex justify-center items-center">
                        <input
                            type="range"
                            min="0"
                            value={time}
                            max="7200"
                            step="30"
                            className="relative md:w-[500px] w-[300px]"
                            onChange={(e) => {
                                setTime(e.target.value);
                            }}
                        />
                    </div>
                    {start ? (
                        <div className="flex gap-[20px] mt-[20px]">
                            <button
                                className="hover:translate-y-[-3px] transition duration-200 bg-gradient-to-r from-purple-400 via-indigo-500 to-violet-500 w-[80px] h-[40px] rounded-[10px] text-white"
                                onClick={() => {
                                    setStart(false);
                                    setSoundSwitch(false);
                                }}
                            >
                                Pause
                            </button>
                            <button
                                className="hover:translate-y-[-3px] transition duration-200 bg-gradient-to-r from-purple-400 via-indigo-500 to-violet-500 w-[80px] h-[40px] rounded-[10px] text-white"
                                onClick={() => {
                                    setTime(30);
                                    setStart(false);
                                    setSoundSwitch(false);
                                }}
                            >
                                Stop
                            </button>
                        </div>
                    ) : (
                        <button
                            className="mt-[20px] bg-blue-400 w-[80px] h-[40px] rounded-[10px] text-white hover:translate-y-[-3px] transition duration-200"
                            onClick={() => {
                                setStart(true);
                                setSoundSwitch(true);
                            }}
                        >
                            Start
                        </button>
                    )}
                    <button onClick={() => setSoundSwitch(!soundSwitch)} className="absolute top-[15px] right-[15px]">
                        {soundSwitch ? (
                            <div className="w-[40px] h-[40px] bg-red-400/40 rounded-[50%] flex justify-center items-center">
                                <icons.audioIcon className=" w-[30px] h-[30px]" />
                            </div>
                        ) : (
                            <div className="w-[40px] h-[40px] bg-black/40 rounded-[50%] flex justify-center items-center">
                                <icons.audioIcon className=" w-[30px] h-[30px]" />
                            </div>
                        )}
                    </button>
                </section>
            </div>
        </PageLayout>
    );
};

export default Page;
