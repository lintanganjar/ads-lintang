'use client'

import { useState } from 'react'

function Banner6(props) {
  // Determine the background color and shadow based on the plan name
  const cardBgColor = props.planName === "Basic" ? "bg-white shadow-2xl" : "bg-transparent";
  const buttonBgColor = props.planName === "Basic" ? "bg-yellow-500" : "bg-indigo-500";

  return (
    <>
      <div className={`h-full w-64 ${cardBgColor} p-4 rounded-lg`}>
        <div className="mb-5">
          <div className="text-slate-900 font-bold text-2xl mb-1">{props.planName}</div>
          <div className="text-sm text-slate-500 mb-5">{props.planDescription}</div>

          <div className="inline-flex items-baseline mb-2">
            {props.price === "Gratis" ? (
              <span className="text-slate-900 font-bold text-xl">Gratis</span>
            ) : (
              <>
                <span className="text-slate-900 font-bold text-2xl">Rp. </span>
                <span className="text-slate-900 font-bold text-2xl">{props.yearly ? props.price.yearly : props.price.monthly}.000</span>
                <span className="text-slate-500 font-medium">/bulan</span>
              </>
            )}
          </div>
          <a
            className={`w-full inline-flex justify-center whitespace-nowrap rounded-lg ${buttonBgColor} px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:${buttonBgColor === "bg-yellow-500" ? "bg-yellow-600" : "bg-indigo-600"} focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150`}
            href="#0"
          >
            {props.how}
          </a>
        </div>
        <div className="text-slate-900 font-medium mb-3">Includes:</div>
        <ul className="text-slate-600 text-sm space-y-3 grow">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default function PricingTable() {
  const [yearly, setYearly] = useState(true)

  return (
    <div className='bg-white w-full md:h-[740px] mt-16 mb-32   md:pl-[53px] pl-40px'>
      {/* Pricing toggle */}
      <div className="flex flex-col justify-center items-center max-w-[14rem] m-auto mb-8 lg:mb-16">
        <h4 className="md:text-[34px] text-xl mb-5 md:leading-[42px]  font-bold">Our Pricing</h4>
        <h4 className='md:hidden text-3xl font-bold'>Subscription</h4>
        <div className="relative flex w-full p-2 m-1 bg-white rounded-full drop-shadow-2xl">
          <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
            <span className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${yearly ? 'translate-x-0' : 'translate-x-full'}`}></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${yearly ? 'text-white' : 'text-slate-500'}`}
            onClick={() => setYearly(true)}>
            Monthly
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${yearly ? 'text-slate-500' : 'text-white'}`}
            onClick={() => setYearly(false)}>
            Yearly
          </button>
        </div>
        {yearly || (
          <div className='justify-center items-center mt-5'>
            <p className="bg-purple-100 rounded-lg text-blue-500 p-2 w-96 mx-auto text-center mb-4">
              Hemat hingga 25% dengan paket tahunan
            </p>
          </div>
        )}
      </div>
      <div className='flex'>
        <div className="hidden md:block md:border-l-3 h-full border-gray-400 md:pl-5 "> 
          <p className="text-gray-400">Get Started</p>
          <p className="text-gray-400">Broadcast</p>
          <p className="text-gray-400">Campaign</p>
          <p>Auto Replay</p>
          <p className="text-gray-400">Opportunity</p>
          <p className="text-gray-400">Pricing</p>
          <p className="text-gray-400">FAQ</p>
          <p className="text-gray-400">Contact Us</p>
        </div>

        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-4 items-start lg:max-w-none">
          {/* Pricing tab 1 */}
          <Banner6
            yearly={yearly}
            planName="Starter"
            planDescription="Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp."
            price="Gratis"
            how={"Start Now"}
            features={[
              '100 Auto reply',
              '500 Broadcast',
              '50 Campaign',
              '500 Contact',
              '50 Device',
              'Excel / CSV Contact Import',
              'Google Contact Sync'
            ]} />

          {/* Pricing tab 2 */}
          <Banner6
            yearly={yearly}
            popular={true}
            planName="Basic"
            price={{ yearly: 65.000, monthly: 65.000 }}
            how={"Get Started"}
            planDescription="Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp."
            features={[
              '100 Auto reply',
              '500 Broadcast',
              '50 Campaign',
              '500 Contact',
              '50 Device',
              'Excel / CSV Contact Import',
              'Google Contact Sync'
            ]} />

          {/* Pricing tab 3 */}
          <Banner6
            yearly={yearly}
            planName="Premium"
            price={{ yearly: 76.000, monthly: 76.000 }}
            how={"Start Now"}
            planDescription="Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp."
            features={[
              '100 Auto reply',
              '500 Broadcast',
              '50 Campaign',
              '500 Contact',
              '50 Device',
              'Excel / CSV Contact Import',
              'Google Contact Sync'
            ]} />

          {/* Pricing tab 4 */}
          <Banner6
            yearly={yearly}
            planName="Pro"
            price={{ yearly: 86.000, monthly: 86.000 }}
            how={"Start Now"}
            planDescription="Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp."
            features={[
              '100 Auto reply',
              '500 Broadcast',
              '50 Campaign',
              '500 Contact',
              '50 Device',
              'Excel / CSV Contact Import',
              'Google Contact Sync'
            ]} />
        </div>
      </div>
    </div>
  )
}
