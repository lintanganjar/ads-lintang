"Use client"
import Image from "next/image"
import logo from "/public/Logo.svg"

export default function Signin(){
    <>
    <div className="md:bg-[#ECF2FA] bg-[#F3F5F8]">
        <div>
            <Image src={logo} width={200} height={200}/>
        </div>
    </div>
    </>
}