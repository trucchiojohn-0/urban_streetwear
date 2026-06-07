'use client'

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { MoveRight, MoveLeft } from "lucide-react";
import Link from "next/link"

export default function Shop() {
    return (
        <>
            <div className="shopping_catalogue">
                <h1>Shop-Sidebar</h1>
                <p className="grey_subtext"> Home/Shop-Sidebar</p>
            </div>
            <div className="body_shop">
                <div className="sidebar">
                    <div className="search_container">
                        <input type="search" placeholder="Search" className="search" />
                        <Search size={40} strokeWidth={1} className="search_icon" />
                    </div>

                    <h3>Categories</h3>
                    <ul className="links_list">
                        <li><a href="/shop/tshirts" className="links">T-Shirts</a></li>
                        <li><a href="/shop/Hoodles" className="links">Hoodles</a></li>
                        <li><a href="/shop/Tees/Oversized" className="links">Oversized Tees</a></li>
                        <li><a href="/shop/Tees/Graphic" className="links">Graphic Tees </a></li>
                        <li><a href="/shop/Hoodles/Zip-Up" className="links">Zip-Up Hoodles </a></li>
                    </ul>

                    <h3>Tags</h3>
                    <ul className="links_list">
                        <li><a href="/shop/casualwear" className="links">Casual Wear</a></li>
                        <li><a href="/shop/streetstyle" className="links">Street Style</a></li>
                        <li><a href="/shop/fitoversized" className="links">Oversized Fit</a></li>
                        <li><a href="/shop/fabric_cotton" className="links">Cotton Fabric </a></li>
                        <li><a href="/shop/trendydesigns" className="links">Trendy Designs</a></li>
                    </ul>

                    <h3>Filter By Price</h3>
                    <ul className="links_list">
                        <li><a href="" className="links">Less than $10</a></li>
                        <li><a href="" className="links">$10-$20</a></li>
                        <li><a href="" className="links">$20-$30</a></li>
                        <li><a href="" className="links">$30-$40</a></li>
                        <li><a href="" className="links">$40-$50</a></li>
                    </ul>
                </div>

                <div className="available_products">
                    <span className="show_results">Showing 1-9 of 55 results</span>
                    <span className="default_sorting">Default sorting</span>
                    <div className="products">
                        <div className="container_products">
                            {products.map((e) => (
                                <Link href={`/shop/${e.product_id}`} className="card" key={e.product_id}>
                                    <div className="container_imgs">
                                        <img src={e.image_url} alt="" className="imagens" />
                                        <img src={e.image_active_url} alt="" className="image2" />
                                    </div>
                                    <div className="product_description">
                                        <span className="name_product">{e.description}</span> <br />
                                        <span style={{ fontSize: 'small', fontFamily: 'var(--font-montserrat)' }}>$ {e.price}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section_next_page">
                <a href="" className="next_page"><MoveLeft /></a>
                <a href="" className="next_page">1</a>
                <a href="" className="next_page">2</a>
                <a href="" className="next_page">3</a>
                <a href="" className="next_page">4</a>
                <a href="" className="next_page">5</a>
                <a href="" className="next_page"><MoveRight /></a>
            </div>
        </>
    )
}