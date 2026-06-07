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
                    <Image
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
                        <Image
                            src="/img_modern_collection.jpg"
                            alt="Modern Collection"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            src="/img_classic_collection.jpg"
                            alt="Classic Collection"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="carousel-item">
                        <Image
                            src="/img_new_collection.jpg"
                            alt="New Collection"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-[5rem] mb-[5rem] justify-center items-center text-center font-montserrat'>
                <h2 className='font-extrabold text-3xl mb-4'>About Us</h2>
                <div className='flex flex-col items-center justify-center font-[----font-montserrat]'>
                    <p className='max-w-xl mb-6'>
                        We are a store completely dedicated to <br />
                        our clothing catalog and serving our customers!
                    </p>
                    <a className='flex bg-transparent justify-center items-center gap-2 border-[1.5px] border-black font-montserrat text-sm rounded-full w-[175px] h-[50px] cursor-pointer hover:bg-black hover:text-white' href="/about">
                        About Us <ArrowRight />
                    </a>
                </div>
            </div>
        </>
    )
}