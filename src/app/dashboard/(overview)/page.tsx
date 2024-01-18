"use client"
import Image from "next/image"
import sneakerMain from '@/images/image-product-1.jpg'
import { useState } from "react";

const Page = () => {
  const [quantSneaker, setQuantSneaker] = useState(0)

  function add(){
    setQuantSneaker(quantSneaker + 1)
    }
    
  function sub(){
    if(quantSneaker ===0){
    setQuantSneaker(0)
    } else {
      setQuantSneaker(quantSneaker -1)
    }
  }
  
  return (
    <div className="sm:flex sm:items-cente sm:p-10">
      <div className="w-full ">
        <Image className=" sm:h-[400px] sm:rounded-2xl  md:rounded-2xl md:w-[500px] md:h-[450px]" alt="" src={sneakerMain} />
      </div>
      <div className="flex flex-col p-3 h-2/3 justify-between ">
        <div className="flex flex-col justify-between h-full ">
          <span className="text-primary text-sm p-1 font-medium md:mb-5">SNEAKER COMPANY</span>
          <h1 className=" font-bold text-3xl md:mb-5">Fall Limited Edition Sneakers</h1>
          <p  className=" text-Darkgrayishblue "> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </div>
        <div className="flex items-center3 justify-between h-full w-full md:mt-10 md:flex-col md:items-start">
          <div className="flex items-center">
            <p className="mr-5 font-bold text-2xl">$125.00</p>
            <p className="text-primary font-semibold bg-secondary h-6 w-10 items-center flex rounded p-1">50%</p>
          </div>
          <span className="text-Darkgrayishblue line-through md:mb-3">$250</span>
        </div>   
        <div className="w-full md:flex">
          <div className="md:mr-10 w-full md:h-[50px] md:items-center md:flex md:w-1/2 mb-3 bg-Lightgrayishblue rounded items-centerflex justify-around h-[50px] flex items-center">
            <button onClick={sub} className="font-bold text-primary text-3xl">-</button>
            <p className="text-2xl">{quantSneaker}</p>
            <button onClick={add} className="font-bold text-primary text-3xl ">+</button>
          </div>
          <button className="md:h-[50px] w-full font-semibold text-white bg-primary rounded items-center flex justify-center h-[50px]">Add to cart</button>
          </div>
      </div>

    </div>

  )
}

export default Page