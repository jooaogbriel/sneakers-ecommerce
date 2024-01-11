import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';
import logo  from "@/images/logo.svg";
import cart from '@/images/icon-cart.svg'
import avatar from '@/images/image-avatar.png'

export default function SideNav() {
  return (
    <div className="flex px-3 py-4 md:px-2 flex-row justify-around ">
      <div className='flex w-full items-center justify-between'>
        <Link
          className=" flex ml-10 "
          href="/"
        >
          <Image alt=""  src={logo}/>
        </Link>
        <div className=" ml-9 flex  ">
          <NavLinks />
        </div>
      </div>
      <div className="hidden h-auto w-full grow  md:block ">
        <form>
          <div className="flex h-[48px] w-full  grow items-center justify-center gap-2 ml-40 p-3 md:flex-none md:p-2 md:px-3">
            <Image className=" cursor-pointer" src={cart} alt=''/>
            <Image className=" w-10 cursor-pointer" src={avatar} alt=''/>
          </div>
        </form>
        </div>
    </div>
  );
}
