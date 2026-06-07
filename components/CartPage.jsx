'use client'
import React from "react"
import { useState, useEffect } from "react";
import { Plus, Minus, CircleX } from 'lucide-react';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadCartAndProducts() {

            const resCart = await fetch(`http://localhost:4000/cart`);
            const cartData = await resCart.json();
            setCart(cartData);

            const productsRequests = cartData.map(item =>
                fetch(`http://localhost:4000/shop/${item.product_id}`)
                    .then(res => res.json())
            );

            const productsData = await Promise.all(productsRequests);
            setProducts(productsData);
        }

        loadCartAndProducts();
    }, []);



    const [email_newsletter, setEmail_newsletter] = useState('')

    function click_newsletter() {
        if (email_newsletter === '')
            alert("O email está em branco.")
        else alert("Parabéns! Agora você receberá novas ofertas em seu email!")
    }

    async function updateQuantity(cart_id, newQuantity) {
        try {
            await fetch(`http://localhost:4000/cart/${cart_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity: newQuantity })
            });
            setCart(prev =>
                prev.map(item =>
                    item.cart_id === cart_id ? { ...item, quantity: newQuantity } : item
                )
            );

        } catch (err) {
            alert("Erro ao atualizar quantidade");
            console.error(err);
        }
    }

    function AddQuantity(item) {
        updateQuantity(item.cart_id, item.quantity + 1);

    }

    function RemoveQuantity(item) {
        if (item.quantity > 1) {
            updateQuantity(item.cart_id, item.quantity - 1)
        }
    }

    async function deleteCart(cart_id) {
        try {
            const response = await fetch(`http://localhost:4000/cart/${cart_id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Falha ao excluir o item no servidor.');
            }

            setCart(prev => prev.filter(item => item.cart_id !== cart_id));
            setProducts(prev => {
                return prev.filter((p, i) => cart[i]?.cart_id !== cart_id);
            });
        } catch (error) {
            console.error("Erro ao excluir item:", error);
            alert("Ocorreu um erro ao tentar excluir o item.");
        }
    } 
    return (
        <div className="flex flex-col w-full h-full gap-20">
            <div className="flex text-center justify-center p-0 m-0 gap-5">
                <h1>Cart</h1>
                <p>Home/Cart</p>
            </div>

            <div className="grid gap-10">
                <div >
                    <div className="grid grid-cols-3 gap-[60px] font-[family-name:var(--font-montserrat)]">
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    <hr />
                    <div className="products">
                        {cart.length === 0 && <p>Seu carrinho está vazio...</p>}

                        {cart.map((item, i) => (
                            <div key={i} className="product1">

                                <div className="flex flex-row items-center gap-10">
                                    <img src={products[i]?.image_url || "/placeholder.jpg"} className="img1" />
                                    <div>
                                        <p>{products[i]?.name}</p>
                                        <p className="price_cart">R$ {products[i]?.price}</p>
                                    </div>
                                </div>

                                <div className="buy">
                                    <button className="cart_buttonminus" onClick={() => RemoveQuantity(item)}><Minus /></button>
                                    <input type="text" className="cart_input" value={item.quantity} disabled />
                                    <button className="cart_buttonplus" onClick={() => AddQuantity(item)}><Plus /></button>
                                </div>

                                <div className="subtotal">
                                    <p>R$ {products[i]?.price * item.quantity}</p>
                                </div>

                                <div className="cancel">
                                    <CircleX size={30} onClick={() => deleteCart(item.cart_id)} />
                                </div>
                            </div>
                        ))}


                    </div>

                </div>

                <div className="flex flex-col gap-15">
                    <h1 className="font-lg m-0">Cart total</h1>

                    <div className="grid grid-cols-2 grid-rows-2 mb-[25px]">
                        <p>Subtotal:</p>
                        <p>
                            R$ {products.reduce((acc, p, i) => acc + p.price * cart[i].quantity, 0)}
                        </p>
                        <p>Total:</p>
                        <p>
                            R$ {products.reduce((acc, p, i) => acc + p.price * cart[i].quantity, 0)}
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <button className="bg-[#212529] p-[5px] cursor-pointer h-10 w-[45%] text-white">Update Cart</button>
                        <button className="bg-[#212529] p-[5px] cursor-pointer h-10 w-[45%] text-white">Continue Shopping</button>
                    </div>

                    <button className="flex w-full justify-center items-center border-0 bg-[#9f1d1d] p-[5px] cursor-pointer text-white h-10">Proceed to Checkout!</button>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5 mt-2">
                <h1 className="text-lg font-extrabold text-3x1">Get offers & discounts <br /> by subscribing us</h1>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input type="email" name="email" value={email_newsletter} onChange={(e) => setEmail_newsletter(e.target.value)} placeholder="Enter your Email Address" className="flex justify-center items-center text-start w-150 h-12 rounded-[5px] border border-gray-500 pl-5" />
                </form>
                <button className="flex justify-center items-center text-center text-white w-150 h-15 rounded-lg border-none p-auto bg-black" onClick={click_newsletter}>Subscribe Now</button>
            </div>

        </div>
    )
}