"use client"
import Image from "next/image"
import b5 from "/public/image 9.svg"

export default function Banner5() {
    return (
      <>
      <div className="bg-white w-full md:h-[740px] pb-10  md:pl-[53px] pl-40px">
      <div className=" flex md:gap-[95px] items-center flex-col-reverse md:flex-row pt-28">
        <div className="hidden md:block  md:border-l-3 border-gray-400 pl-5 h-full">  
          <p className="text-gray-400">Get Started</p>
          <p className="text-gray-400">Broadcast</p>
          <p className="text-gray-400">Campaign</p>
          <p className="text-gray-400">Auto Replay</p>
          <p >Opportunity</p>
          <p className="text-gray-400">Pricing</p>
          <p className="text-gray-400">FAQ</p>
          <p className="text-gray-400">Contact Us</p>
        </div>

        <div className="md:w-[367px] w-[313px] flex flex-col justify-center md:w-[930px]">
            <div className="text-center md:p-[62px]"><h4 className="md:text-[34px]  text-4xl mb-5 md:mb-7 md:leading-[42px] font-bold text-blue-500">"One Step Closer to More Effective and Connected Communication!"</h4></div>
            <div className="flex md:flex-row flex-col items-center">
                <Image src={b5} width={750} height={700} className="w-full"></Image>
                <div>
                    <div className="flex md:flex-row flex-col gap-4 md:mb-11">
                        <button className="btn bg-blue-600 py-2 px-4 text-white rounded-xl">Bisnis dan Pemasaran</button>
                        <button className="md:border md:border-blue-600 py-2 px-4 text-blue-600 rounded-xl">Komersial dan Penjualan</button>
                        <button className="md:border md:border-blue-600 py-2 px-4 text-blue-600 rounded-xl">Organisasi Sosial</button>
                    </div>
                    <div className="mt-5">
                        <p className="font-bold md:mb-7 text-sm">Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.</p>
                    </div>
                    
                </div>
            </div>
          
          
        </div>
      </div>
      </div>
      </>
    )
  }
  