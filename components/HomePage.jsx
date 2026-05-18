"use client"
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {

    return (
        <>
            <div className="flex justify-between items-start p-5 mt-20">

                <div className="flex flex-col items-start max-w-lg">
                    <h1 className="text-4xl font-extrabold">Classic Cotton T-Shirt</h1>
                    <p className="mt-4">
                        Experience ultimate comfort with our premium cotton t-shirts. <br />
                        Perfect for everyday wear, they provide a stylish and relaxed fit for any occasion.
                    </p>

                    <Link
                        className="flex items-center justify-center gap-3 w-32 h-12 mt-5 bg-red-800 text-white rounded-2xl"
                        href="/shop"
                    >
                        <span>Shop Now</span>
                        <MoveRight size={20} />
                    </Link>
                </div>

                <div className="flex-grow ml-8">
                    <img
                        src="/main_img.jpg"
                        alt="Shirts Urban Streetwear"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center min-h-screen w-full">
                <div className="carousel rounded-sm gap-2.5">
                    <div className="carousel-item bg-yellow-300">
                        <img
                            src="/img_modern_collection.jpg"
                            alt="Modern Collection"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/img_classic_collection.jpg"
                            alt="Classic Collection"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/img_new_collection.jpg"
                            alt="New Collection"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-1.5'>
                <h2 className='flex justify-center align-center font-bold text-2xl'>About Us</h2>
                <div className='flex flex-col items-center align-center justify-center'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>Voluptate velit ipsa explicabo consequuntur tempora blanditiis optio repellat veniam delectus. Provident!</p>
                    <a className='border border-black-900 rounded-xl bg-white text-black p-1.5 m-1 inline-flex items-center gap-2' href="/about">
                        About Us <ArrowRight />
                    </a>
                </div>
            </div>
        </>
    )
}