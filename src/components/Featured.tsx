import { featuredProducts } from '@/data'
import { ProductType } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("Failed!");
    }

    return res.json()
}

const Featured = async () => {
    const featuredProducts: ProductType[] = await getData()


    return (
        <div className="snap-x w-screen overflow-x-scroll md:overflow-x-hidden text-red-500">
            <div className="flex flex-wrap w-max md:w-auto">
                {featuredProducts.map((item) => (
                    <Link
                        href={`/product/${item.id}`}
                        key={item.id}
                        className="snap-start w-screen h-[80vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
                    >
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[360deg] transition-all duration-1000">
                                <Image src={item.img} alt="" fill className="object-contain" />
                            </div>
                        )}
                        <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                            <p className="p-4 2xl:p-8">{item.desc}</p>
                            <span className="text-xl font-bold">${item.price}</span>
                            <button className="bg-red-500 text-white p-2 rounded-md">
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Featured