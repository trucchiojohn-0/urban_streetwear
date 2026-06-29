import { createClient } from "../lib/supabase/client";
import { Search } from "lucide-react";
import { MoveRight, MoveLeft } from "lucide-react";
import Link from "next/link"

async function getProducts() {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('products')
        .select('*');

    if (error) {
        console.log('Erro ao encontrar produto.', error)
        return []
    }
    return data;
}

export default async function Shop() {

    const products = await getProducts();

    return (
        <>
            <div className="text-center mt-24 p-4">
                <h1>Shop-Sidebar</h1>
                <p className="text-[rgb(73,73,73)] font-[--font-montserrat]"> Home/Shop-Sidebar</p>
            </div>
            <div className="flex flex-row flex-nowrap justify-start gap-8 w-full max-w-[1200px] ml-0 mr-40 px-4">
                <div className="flex flex-col w-4/5 max-w-[500px] relative pt-8">
                    <div className="flex flex-row justify-right mt-40 w-full max-w-60">
                        <input type="search" placeholder="Search" className="max-w-[350px] w-96 h-auto mt-5" />
                        <Search size={40} strokeWidth={1} className="bg-[#87612e] text-white w-20 h-12 cursor-pointer rounded-[0.1rem] mr-4 mt-8 flex items-center justify-center" />
                    </div>

                    <h3>Categories</h3>
                    <ul className="w-3/4 h-auto list-none p-0 m-0">
                        <li><a href="/shop/tshirts" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">T-Shirts</a></li>
                        <li><a href="/shop/Hoodles" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Hoodles</a></li>
                        <li><a href="/shop/Tees/Oversized" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Oversized Tees</a></li>
                        <li><a href="/shop/Tees/Graphic" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Graphic Tees </a></li>
                        <li><a href="/shop/Hoodles/Zip-Up" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Zip-Up Hoodles </a></li>
                    </ul>

                    <h3>Tags</h3>
                    <ul className="w-3/4 h-auto list-none p-0 m-0">
                        <li><a href="/shop/casualwear" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Casual Wear</a></li>
                        <li><a href="/shop/streetstyle" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Street Style</a></li>
                        <li><a href="/shop/fitoversized" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Oversized Fit</a></li>
                        <li><a href="/shop/fabric_cotton" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Cotton Fabric </a></li>
                        <li><a href="/shop/trendydesigns" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Trendy Designs</a></li>
                    </ul>

                    <h3>Filter By Price</h3>
                    <ul className="w-3/4 h-auto list-none p-0 m-0">
                        <li><a href="" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">Less than $10</a></li>
                        <li><a href="" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">$10-$20</a></li>
                        <li><a href="" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">$20-$30</a></li>
                        <li><a href="" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">$30-$40</a></li>
                        <li><a href="" className="text-none text-black font-[--font-montserrat] text-4x1 hover:text-[rgb(73,73,73)]">$40-$50</a></li>
                    </ul>
                </div>

                <div className="flex-1 flex-col justify-start items-center font-[--font-montserrat] mt-60">
                    <span className="flex justify-start items-start text-left mb-auto mr-[50rem] flex-nowrap text-[1rem] font-thin">Showing 1-9 of 55 results</span>
                    <span className="flex justify-center items-center text-center mb-2 ml-[55rem] flex-nowrap text-xs font-light border border-black rounded-[5%] p-[0.3rem]">Default sorting</span>
                    <div className="products">
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-4/5 max-w-[1300px] gap-5 justify-items-center mt-0 mb-20 mx-auto">
                            {products.map((e) => (
                                <Link href={`/shop/${e.product_id}`} className="max-w-[300px] w-full transition-transform duration-300 ease-in-out hover:scale-105" key={e.product_id}>
                                    <div className="flex w-24 h-auto border-1 justify-center">
                                        <img src={e.image_url} alt="" className="w-full h-auto max-w-[300px]" />
                                        <img src={e.image_active_url} alt="" className="block w-full h-auto max-w-[300px]" />
                                    </div>
                                    <div className="leading-4 mt-2">
                                        <span className="font-saira-stencil text-[25px] mt-[10px]">{e.description}</span> <br />
                                        <span className="font-[--font-montserrat] text-sm">$ {e.price}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-[250px] max-w-[40%] items-center justify-center my-auto mr-0 ml-20 p-0 gap-2.5 bg-white border border-[rgb(194,36,36)] rounded-[2.5px] shadow-[0px_5px_10px_0px_#3b3838]">
                <a href="" className="flex flex-row m-auto p-[6px] text-base text-[rgb(194,36,36)] hover:bg-[rgb(159,29,29)] hover:text-white"><MoveLeft /></a>
                <a href="" className="flex flex-row m-auto p-[6px] text-base text-[rgb(194,36,36)] hover:bg-[rgb(159,29,29)] hover:text-white">1</a>
                <a href="" className="flex flex-row m-auto p-[6px] text-base text-[rgb(194,36,36)] hover:bg-[rgb(159,29,29)] hover:text-white">2</a>
                <a href="" className="flex flex-row m-auto p-[6px] text-base text-[rgb(194,36,36)] hover:bg-[rgb(159,29,29)] hover:text-white">3</a>
                <a href="" className="flex flex-row m-auto p-[6px] text-base text-[rgb(194,36,36)] hover:bg-[rgb(159,29,29)] hover:text-white">4</a>
                <a href="" className="flex flex-row m-auto p-[6px] text-base text-[rgb(194,36,36)] hover:bg-[rgb(159,29,29)] hover:text-white">5</a>
                <a href="" className="flex flex-row m-auto p-[6px] text-base text-[rgb(194,36,36)] hover:bg-[rgb(159,29,29)] hover:text-white"><MoveRight /></a>
            </div>
        </>
    )
}