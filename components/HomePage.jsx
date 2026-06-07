"use client"
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {

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

            <div className="flex items-center justify-center min-h-screen w-full px-4 bg-gray-100">
  {/* CONTAINER DO CARROSSEL: Habilita scroll horizontal e snap para travar no card */}
  <div className="flex w-full max-w-[1000px] gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4">
    
    {/* CARD 1 */}
    <div className="flex-none w-full max-w-[300px] h-[500px] snap-center relative rounded-[5px] overflow-hidden group">
      <Image
        src="/img_modern_collection.jpg"
        alt="Modern Collection"
        width={300}
        height={500}
        className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
      />
      {/* Overlay Cinza Escuro com opacidade */}
      <div className="absolute inset-0 bg-gray-900/50 transition-opacity duration-300 group-hover:bg-gray-900/40" />
      {/* Texto Centralizado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h3 className="text-white text-xl font-bold font-sans tracking-wide uppercase drop-shadow-md">
          Modern Collection
        </h3>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="flex-none w-full max-w-[300px] h-[500px] snap-center relative rounded-[5px] overflow-hidden group">
      <Image
        src="/img_classic_collection.jpg"
        alt="Classic Collection"
        width={300}
        height={500}
        className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gray-900/50 transition-opacity duration-300 group-hover:bg-gray-900/40" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h3 className="text-white text-xl font-bold font-sans tracking-wide uppercase drop-shadow-md">
          Classic Collection
        </h3>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="flex-none w-full max-w-[300px] h-[500px] snap-center relative rounded-[5px] overflow-hidden group">
      <Image
        src="/img_new_collection.jpg"
        alt="New Collection"
        width={300}
        height={500}
        className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gray-900/50 transition-opacity duration-300 group-hover:bg-gray-900/40" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h3 className="text-white text-xl font-bold font-sans tracking-wide uppercase drop-shadow-md">
          New Collection
        </h3>
      </div>
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