"use client"
import { ShoppingCart, User, ChevronDown, Search } from 'lucide-react';


 export default function HeaderPage(){
    return (
        <header>
            <nav className="bg-white px-4 lg:px-5 py-5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/home" className="flex items-center">
                        <span className="self-center text-xl font-extrabold whitespace-nowrap dark:text-black">Urban</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a href="/search" className="text-black hover:text-gray-500 px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white-700">
                            <Search className="w-5 h-5" />
                        </a>
                        <a href="/user" className="text-black hover:text-gray-500 px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white-700">
                            <User className="w-5 h-5" />
                        </a>
                        <a href="/cart" className="text-black bg-primary-700 hover:text-gray-500 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <ShoppingCart className="w-5 h-5" />
                        </a>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="/home" className="block py-2 pr-4 pl-3 text-black hover:text-gray-500 transition-colors duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:hover:text-gray-400">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 pr-4 pl-3 text-black hover:text-gray-500 transition-colors duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:hover:text-gray-400">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/shop" className="block py-2 pr-4 pl-3 text-black hover:text-gray-500 transition-colors duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:hover:text-gray-400">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="block py-2 pr-4 pl-3 text-black hover:text-gray-500 transition-colors duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:hover:text-gray-400">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/pages" className="block py-2 pr-4 pl-3 text-black hover:text-gray-500 transition-colors duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:hover:text-gray-400">
                                    Pages
                                </a>
                            </li>
                            <li>
                                <a href="/upgrade" className="block py-2 pr-4 pl-3 text-black font-bold hover:text-gray-500 transition-colors duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:hover:text-gray-400 underline underline-offset-2">
                                    GET PRO
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}