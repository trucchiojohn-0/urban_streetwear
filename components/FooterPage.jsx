'use state'

export default function Footer() {
    return (
        <>
            <div className="flex flex-wrap overflow-hidden w-full justify-between gap-5 m-20 p-2 bg-[#fdfeff] font-sans">
                <div className="max-w-350 font-sans gap-[0.5rem]">
                    <a href=""><h1 className="text-3xl font-bold font-[family-name:var(--font-saira-stencil)] text-black">Urban</h1></a>
                    <p>Mi dolor sit amet consectetur adipisicing elit. Accusantium commodi animi fugiat velit optio eveniet a laborum iusto, sit nesciunt.</p>
                    <p>© Copyright 2025 HTML Template by TemplatesJungle</p>
                </div>
                <div className="max-w-250 font-5x1">
                    <h2 className="text-[20px] font-bold font-[family-name:var(--font-saira-stencil)]">Quick Links</h2>
                    <a href="/home" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Home</a>
                    <a href="/about" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">About</a>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Services</a>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Blogs</a>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Contact</a>
                </div>
                <div className="text-lg max-w-250 font-sans">
                    <h2 className="text-[20px] font-bold font-[family-name:var(--font-saira-stencil)]">Social Medias</h2>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Facebook</a>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Twitter</a>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Pinterest</a>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Instagram</a>
                    <a href="" className="text-left no-underline text-black transition-colors duration-300 ease-out text-lg font-sans hover:text-[#3b3838]">Youtube</a>
                </div>
                <div className="text-lg max-w-250 font-sans">
                    <h2 className="text-[20px] font-bold font-[family-name:var(--font-saira-stencil)]">Contact Us</h2>
                    <p>
                        +12(0) 34 56 78 910
                    </p>
                    <p>
                        info@youremail.com
                    </p>
                    <p>
                        Tea Berry, Marinette, USA
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center text-center h-100 w-auto p-[0.1rem] text-lg font-sans">
                <span>© 2025 Urban HTML Website Template by <span className="underline decoration-solid">TemplatesJungle</span></span>
            </div>
        </>
    )
}