import { CiLight, CiDark } from 'react-icons/ci';
import { FaCaretRight, FaCaretLeft, FaHome, FaClock } from 'react-icons/fa';
import { FcLink } from 'react-icons/fc';
import { AiOutlineSound } from 'react-icons/ai';

export const logo = '/img/meditationLogo.jpg';

export const water = '/sound/waterSound.mp3';

export const icons = {
    light: CiLight,
    dark: CiDark,
    left: FaCaretLeft,
    right: FaCaretRight,
    linkIcon: FcLink,
    clock: FaClock,
    homeIcon: FaHome,
    audioIcon: AiOutlineSound,
};

export const backImages = {
    dark: '/bg/dark.png',
    light: '/bg/light.png',
    bg1: '/bg/bg1.jpg',
    bg2: '/bg/bg2.jpg',
};

export const quotes = [
    {
        detail: '어떤 행동에도 변하지 않고 닥쳐오는 운명이란 없다. 그러나 행동하지 않는 자에게 닥쳐오는 운명은 존재한다.',
        author: 'Siddhartha Gautama',
    },
    {
        detail: '내 앞에 놓인 모든 일을 개인적인 결과에 연연하지 말고, 가슴과 영혼을 다해 최선을 다한다. 우주가 직접 나에게 준 일이라고 생각하면서 한다.',
        author: 'Michael A.Singer',
    },
    { detail: '평화는 내면에서 나옵니다. 밖에서 찾지 마세요', author: 'Siddhartha Gautama' },
    { detail: '명상은 당신 안에 있는 신성을 키우고 꽃피우는 방법입니다.', author: 'Amit Ray' },
    {
        detail: '명상의 목표는 생각을 통제하는 것이 아니라 생각이 당신을 통제하지 못하게 하는 것입니다.',
        author: 'anonymous',
    },
    { detail: '명상은 영적인 삶과 지식의 모든 성장의 비결입니다.', author: 'James Allen' },
    { detail: '당신의 차분한 마음은 당신의 도전에 맞서는 궁극적인 무기입니다.', author: 'Bryant H. McGill' },
];
