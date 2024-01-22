"use client"

import Link from 'next/link';
import { useState } from "react";
import close from '@/images/icon-close.svg'
import menu from '@/images/icon-menu.svg'
import Image from 'next/image';
import logo  from "@/images/logo.svg";
import cart from '@/images/icon-cart.svg'
import avatar from '@/images/image-avatar.png'
import Cart from '../cart/cart';

const links = [
    { 
      name: 'Home', 
      href: '/dashboard' },
    {
      name: 'Collections',
      href: '/dashboard/collections',
    },
    { name: 'Men', 
      href: '/dashboard/men' 
    },
    { name: 'Women', 
      href: '/dashboard/women' 
    },
    { name: 'About', 
      href: '/dashboard/about' 
    },
    { name: 'Contact', 
      href: '/dashboard/contact' 
    },
  ];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false)

  const toggleCart = () => {
    setCartOpen(!isCartOpen)
  }

  return (
    <nav className="w-full flex py-4 justify-between items-center">
      <Link href={'/'}>
      <Image src={logo} alt="" className="w-[124px] h-[20px]" />
      </Link>
        <div className="flex h-[48px] grow items-center justify-start ml-10 p-3 md:p-2 md:px-3">
             <Image onClick={toggleCart} className=" cursor-pointer mr-10" src={cart} alt=''/>     
             <Image className=" w-10 cursor-pointer " src={avatar} alt=''/>
             <div>{isCartOpen && <Cart />}</div>
        </div>
        
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {links.map((nav, index) => (
          <Link
            key={nav.name}
            href={`${nav.href}`}
            className={` font-normal cursor-pointer text-[16px] ${
              active === nav.name ? "text-primary" : "text-dimWhite"
            } ${index === links.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.name)}
          >
            <p className="hidden md:text-[15px] ss:text-xs ss:block">{nav.name}</p>
          </Link>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[18px] h-[18px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {links.map((nav, index) => (
              <Link
                key={nav.name}
                href={nav.href}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.name ? "text-primary" : "text-Verydarkblue"
                } ${index === links.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <p className=" md:block">{nav.name}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;