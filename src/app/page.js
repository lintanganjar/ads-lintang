import Image from "next/image";
import Banner1 from "./components/banner1";
import Banner2 from "./components/banner2";
import Banner3 from "./components/banner3";
import Banner4 from "./components/Banner4";
import Banner5 from "./components/banner5";
import Banner6 from "./components/banner6";
import Signin from "./components/utilities/Signin/page";

import "./globals.css";

export default function Home() {
  return (
    <>
    <Banner1/>
    <Banner2/>
    <Banner3/>
    <Banner4/>
    <Banner5/>
    <Banner6/>,
    <Signin/>

    
    </>
  )
}
