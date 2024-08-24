"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '/public/Logo.jpg';
import hamMenu from '/public/Frame 111.png'
import { useRouter } from 'next/router';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div >
      <nav className="  fixed top-0 left-0 right-0 z-10 ">
        <div className=" bg-yellow-200 rounded-xl md:w-[691.31px] md:justify-center md:flex justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              
              <Link href="/">
                <Image src={Logo} width={150} height={150}/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={hamMenu}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-5 font-medium md:text-sm md:text-blue-500 py-2 md:px-6 text-center   md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Feature
                  </Link>
                </li>
                <li className="pb-6 font-medium md:text-sm py-2 px-6 text-center  md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className="pb-6 font-medium md:text-sm  py-2 px-6 text-center    md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Demo
                  </Link>
                </li>
                <li className="pb-6 font-medium md:text-sm  py-2 px-6 text-center    md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                
                <li className="pb-6 font-medium md:text-sm text-center     md:hover:bg-transparent">
                  <Link href="/banner3" onClick={() => setNavbar(!navbar)}>
                    <button className=' btn bg-blue-500 py-2 px-7 text-white rounded btn-small md:ml-5'>Sign up</button>
                </Link>
                </li>
                <li className="md:hidden pb-6 font-medium md:text-sm  py-2 px-6 text-center text-gray-400 cursor-not-allowed   md:hover:bg-transparent">
                  <Link href="" onClick={() => setNavbar(!navbar)}>
                  Sign In as Admin
                  </Link>
                </li>
                <li className="md:hidden pb-6 font-medium md:text-sm  py-2 px-6 text-center    md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Sign In as Customer Service
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
