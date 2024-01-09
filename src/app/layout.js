import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from './components/TopNav';
import Layout from './components/Layout';
import BottomNav from './components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '비우는 시간',
    description: '명상 하는 사람들을 위한 타이머입니다.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://db.onlinewebfonts.com/c/84cb021d5f9af287ffff84b61beef6dc?family=clockicons"
                    rel="stylesheet"
                />
            </head>
            <body className={inter.className}>
                <TopNav />
                <Layout>{children}</Layout>
                <BottomNav />
            </body>
        </html>
    );
}
