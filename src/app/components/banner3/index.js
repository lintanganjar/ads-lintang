"use client"
import Image from "next/image"
import b3 from "/public/Group 249.svg"

export default function Banner3() {
    return (
      <>
      <div className="bg-white w-full md:h-[740px] w-full mb-24 md:pl-[53px] pl-40px">
      <div className=" flex md:gap-[95px] items-center flex-col-reverse md:flex-row pt-28">
        <div className="hidden md:block  md:border-l-3 border-gray-400 pl-5 h-full">  
          <p className="text-gray-400">Get Started</p>
          <p className="text-gray-400">Broadcast</p>
          <p >Campaign</p>
          <p className="text-gray-400">Auto Replay</p>
          <p className="text-gray-400">Opportunity</p>
          <p className="text-gray-400">Pricing</p>
          <p className="text-gray-400">FAQ</p>
          <p className="text-gray-400">Contact Us</p>
        </div>
        <div className="md:w-[367px] w-[313px]">
          <h4 className="md:text-[34px] text-4xl mb-5 md:mb-7 md:leading-[42px] font-bold">Right Time, Effective Messages</h4>
          <p className="font-bold md:mb-7 text-sm">Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.</p>
          
        </div>
        <div className="h-full">
            <Image src={b3} width={730} height={300}/>
        </div>
      </div>
      </div>
      </>
    )
  }
  