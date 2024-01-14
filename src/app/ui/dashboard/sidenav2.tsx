"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from "react";
import close from '@/images/icon-close.svg'
import menu from '@/images/icon-menu.svg'
import Image from 'next/image';
import logo  from "@/images/logo.svg";
import cart from '@/images/icon-cart.svg'
import avatar from '@/images/image-avatar.png'


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
  const pathname = usePathname();

  return (
    <nav className="w-full flex py-4 justify-between items-center  border-b border-solid border-Grayishblue">
      <Image src={logo} alt="hoobank" className="w-[124px] h-[20px]" />
        <div className="flex h-[48px]  grow items-center justify-start ml-10 p-3 md:p-2 md:px-3">
             <Image className=" cursor-pointer mr-10" src={cart} alt=''/>
             <Image className=" w-10 cursor-pointer " src={avatar} alt=''/>
        </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {links.map((nav, index) => (
          <Link
            key={nav.name}
            href={`#${nav.name}`}
            className={` font-normal cursor-pointer text-[16px] ${
              active === nav.name ? "text-primary" : "text-dimWhite"
            } ${index === links.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.name)}
          >
            <p className="hidden md:block">{nav.name}</p>
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
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {links.map((nav, index) => (
              <li
                key={nav.name}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.name ? "text-white" : "text-dimWhite"
                } ${index === links.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <a href={`#${nav.name}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;