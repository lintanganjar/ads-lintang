"use client"
import Image from "next/image"
import b1 from "/public/Group 238.svg"

export default function Banner1() {
    return (
      <>
      <div className="bg-[url('/main-bg.png')] w-full md:h-[740px] bg-center bg-cover md:pl-[53px] p-40px bg-center">
      <div className=" flex md:gap-[95px] items-center flex-col-reverse md:flex-row pt-28 md:pt-[240px]">
        <div className="hidden md:block  md:border-l-3 border-gray-400 pl-5 h-full">  
          <p >Get Started</p>
          <p className="text-gray-400">Broadcast</p>
          <p className="text-gray-400">Campaign</p>
          <p className="text-gray-400">Auto Replay</p>
          <p className="text-gray-400">Opportunity</p>
          <p className="text-gray-400">Pricing</p>
          <p className="text-gray-400">FAQ</p>
          <p className="text-gray-400">Contact Us</p>
        </div>
        <div className="md:w-[367px] w-[313px]">
          <h4 className="md:text-[34px] mb-5 text-3xl md:mb-7 md:leading-[42px] font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h4>
          <p className="font-bold md:mb-7 mb-6 text-sm">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
          <button className="bg-black rounded-lg flex text-white py-3 px-6">Daftar Sekarang <span className="pl-3 ml-3"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="16" viewBox="0 0 448 512"><path fill="#fafafa" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span></button>
        </div>
        <div>
          <Image src={b1} width={700} height={500}></Image>
        </div>
      </div>
      </div>
      </>
    )
  }
  