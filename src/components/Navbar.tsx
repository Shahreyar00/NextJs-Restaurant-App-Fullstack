import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Menu from './Menu';
import CartIcon from './CartIcon';
import UserLinks from './UserLinks';

const Navbar = () => {
    return (
        <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-10 xl:px-20">
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            <div className="text-2xl font-bold flex-1 text-center">
                <Link href="/">MILLANO</Link>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                <div className="absolute top-2 r-2 2xl:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>12345 67890</span>
                </div>
                <UserLinks />
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar