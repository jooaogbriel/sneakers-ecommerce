'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from "react";
import close from '@/images/icon-close.svg'
import menu from '@/images/icon-menu.svg'
import Image from 'next/image';

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

export default function NavLinks() {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center  justify-center gap-2 p-3 text-sm text-Darkgrayishblue font-medium md:hover:text-primary md:justify-start md:p-2 md:px-3',
              {
                '': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
     <div className=" xs:hidden bg-black w-[100px] md:ml-7 flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[98px] h-[28px] object-contain "
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute bg-Grayishblue top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none  h-full flex justify-end items-start flex-1 flex-col">
            {links.map((nav, index) => (
              <li
                key={nav.name}
                className={` font-medium cursor-pointer text-[16px] ${
                  active === nav.name ? "text-primary" : "text-dimWhite"
                } ${index === links.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <a href={`#${nav.name}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
