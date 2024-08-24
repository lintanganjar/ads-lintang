"use client"
import Image from "next/image"
import b2 from '/public/Group 248.svg'

export default function Banner1() {
    return (
      <>
      <div className="bg-[#ECF2FA] w-full pb-16 md:pl-[53px] pl-40px bg-center">
      <div className=" flex md:gap-[95px] items-center flex-col md:flex-row pt-40">
        <div className="hidden md:block md:border-l-3 border-gray-400 md:pl-5 "> 
          <p className="text-gray-400">Get Started</p>
          <p >Broadcast</p>
          <p className="text-gray-400">Campaign</p>
          <p className="text-gray-400">Auto Replay</p>
          <p className="text-gray-400">Opportunity</p>
          <p className="text-gray-400">Pricing</p>
          <p className="text-gray-400">FAQ</p>
          <p className="text-gray-400">Contact Us</p>
        </div>
        <div className="h-full">
            <Image src={b2} width={650} height={300}/>
        </div>
        <div className="md:w-[367px] w-[313px] mb-12">
          <h4 className="md:text-[34px] text-4xl mb-5 md:leading-[42px] font-bold">Reach Further with Ease</h4>
          <p className="font-bold text-sm">Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.</p>
        </div>
        
      </div>
      </div>
      </>
    )
  }
  