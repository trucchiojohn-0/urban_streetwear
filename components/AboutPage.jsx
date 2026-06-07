import Image from 'next/image';

export default function AboutUs() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto p-5">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-extrabold text-left font-[--font-montserrat] underline underline-offset-4">
                        What is Urban Streetwear?
                    </h1>
                    <div className="w-full h-auto overflow-hidden rounded-xl">
                        <Image 
                            src="/img_creators.jpg"
                            alt="Creators of Urban Streetwear"
                            width={300}
                            height={100} 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-left text-center text-black-800 font-[--font-montserrat]">
                        Urban Streetwear was born from the passion of two young entrepreneurs who, 
                        united by their love for urban culture, decided to turn their vision into reality. 
                        Founded in 2020, the brand was created to fill a gap in the market: stylish 
                        streetwear with quality, attitude, and accessibility.
                        <br /><br />
                        Inspired by the energy of the streets and the diversity of cultural expressions, 
                        our founders, João and Lucas, brought to Urban Streetwear a collection of pieces 
                        that reflect the fast-paced urban lifestyle, without sacrificing comfort or authenticity. 
                        Aiming to connect people through a unique and modern style, the brand quickly grew, 
                        gaining a loyal following of those looking to express themselves through what they wear.
                        <br /><br />
                        Today, Urban  Streetwear stands for innovation, boldness, and connection. Every piece 
                        we create is designed for those who live in the moment, unafraid to stand out. Join us 
                        and be part of this fashion revolution.
                    </p>
                </div>

            </div>
        </>
    )
}