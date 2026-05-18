"use client"
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function FooterPage() {
    return (
        <>
            <div className='flex flex-col'>
                <div className='fixed bottom-2 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105'>
                    <a href='/cart' className='inline-flex items-center gap-1.5 text-white justify-center'>
                        <ShoppingCart className="w-5 h-5" />
                        <span>Get it Now</span>
                    </a>
                </div>
            </div>
        </>
    )
}