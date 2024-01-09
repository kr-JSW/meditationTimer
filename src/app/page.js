'use client';
import React from 'react';
import PageLayout from './components/PageLayout';
import { quotes } from './constants';
import Slide from './components/Slide';
import useStore from './useStore';

const Home = () => {
    const { mode } = useStore((state) => state);
    return (
        <PageLayout>
            <section className="h-[calc(100vh-80px)] flex items-center justify-evenly md:justify-center gap-[50px] md:flex-row flex-col ">
                <div>
                    {' '}
                    <Slide arr={quotes} />
                </div>

                <p
                    className={`text-center rounded-[10px] md:w-auto w-[330px] p-[15px] backdrop-blur-[3px] ${
                        !mode ? 'bg-black/40' : 'bg-white/40'
                    }`}
                >
                    안녕하세요. 비우는 시간 입니다. <br />
                    명상은 단순히 휴식만이 아니라, <br /> 마음을 다루는 훈련을 통해 삶을 더욱 윤택하게 만들어 줍니다.{' '}
                    <br />
                    명상을 통해 마음의 작동원리를 깨달아 <br />
                    모든 이들이 <strong>평온</strong>하고, <br />
                    <strong>고통</strong>이 없으며,
                    <br />
                    <strong>더 나은 삶을 누리길 바랍니다.</strong>
                    <br />
                    <br />
                    <br />
                    다른 문의사항이 있다면,
                    <a
                        className="bg-gradient-to-r from-purple-400 via-viplet-500 to-indigo-500 p-[5px] rounded-[7px] text-white"
                        href="mailto:djdurk0817@gmail.com"
                    >
                        djdurk0817@gmail.com
                    </a>{' '}
                    으로 연락주세요!
                </p>
            </section>
        </PageLayout>
    );
};

export default Home;
