"use client"
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {

  return (
    <>
      <div className="flex justify-between items-start pl-25 mt-10">

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

        <div className="flex-grow ml-0 md:ml-5 w-full flex justify-center md:justify-start">
          <Image
            src="/main_img.jpg"
            alt="Shirts Urban Streetwear"
            width={500}
            height={500}
            priority
            className='w-md h-auto'
          />
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen w-full px-5 bg-gray-100">

        <div className="flex w-full max-w-[1000px] gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4">

          <div className="flex-none w-full max-w-[300px] h-[500px] snap-center relative rounded-[5px] overflow-hidden group">
            <Image
              src="/img_modern_collection.jpg"
              alt="Modern Collection"
              width={300}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            <div className="absolute bottom-10 w-full h-40 bg-white/40 duration-300 group-hover:bg-white/50 flex items-center justify-center" />

            <div className="absolute bottom-0 inset-x-0 h-1/2 flex flex-col items-center justify-center gap-5 px-2">
              <h3 className="text-black text-xl font-bold font-sans tracking-wide uppercase text-center px-4">
                Modern Collection
              </h3>
              <a href='/shop' className='inline-flex items-center gap-2 px-5 py-2.5 border border-black rounded-full text-xs font-medium tracking-wider bg-transparent transition-colors duration-300 hover:bg-white hover:text-black pointer-events-auto cursor-pointer'>
                Shop Now <ArrowRight size={20}/>
              </a>
            </div>
          </div>

          <div className="flex-none w-full max-w-[300px] h-[500px] snap-center relative rounded-[5px] overflow-hidden group">
            <Image
              src="/img_classic_collection.jpg"
              alt="Classic Collection"
              width={300}
              height={500}
              className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-10 w-full h-40 bg-white/40 duration-300 group-hover:bg-white/50 flex items-center justify-center" />

            <div className="absolute bottom-0 inset-x-0 h-1/2 flex flex-col items-center justify-center gap-5 px-2">
              <h3 className="text-black text-xl font-bold font-sans tracking-wide uppercase text-center px-4">
                Classic Collection
              </h3>
               <a href='/shop' className='inline-flex items-center gap-2 px-5 py-2.5 border border-black rounded-full text-xs font-medium tracking-wider bg-transparent transition-colors duration-300 hover:bg-white hover:text-black pointer-events-auto cursor-pointer'>
                Shop Now <ArrowRight size={20}/>
              </a>
            </div>
          </div>

          <div className="flex-none w-full max-w-[300px] h-[500px] snap-center relative rounded-[5px] overflow-hidden group">
            <Image
              src="/img_new_collection.jpg"
              alt="New Collection"
              width={300}
              height={500}
              className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-10 w-full h-40 bg-white/40 duration-300 group-hover:bg-white/50 flex items-center justify-center" />
            <div className="absolute bottom-0 inset-x-0 h-1/2 flex flex-col items-center justify-center gap-5 px-2">
              <h3 className="text-black text-xl font-bold font-sans tracking-wide uppercase text-center px-4">
                New Collection
              </h3>
               <a href='/shop' className='inline-flex items-center gap-2 px-5 py-2.5 border border-black rounded-full text-xs font-medium tracking-wider bg-transparent transition-colors duration-300 hover:bg-white hover:text-black pointer-events-auto cursor-pointer'>
                Shop Now <ArrowRight size={20}/>
              </a>
            </div>
          </div>

        </div>

      </div>
      <div className='flex flex-col mt-[5rem] mb-[5rem] justify-center items-center text-center font-montserrat'>
        <h2 className='font-extrabold text-3xl mb-4'>About Us</h2>
        <div className='flex flex-col items-center justify-center font-[--font-montserrat]'>
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