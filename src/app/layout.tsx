import type { Metadata } from 'next';
import { GeistMono } from 'geist/font';
import './globals.css';

export const metadata: Metadata = {
    title: 'Portfolio Spanioulis',
    description: 'Este es el portfolio de Spanioulis, desarrollador web'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={GeistMono.className}>{children}</body>
        </html>
    );
}
