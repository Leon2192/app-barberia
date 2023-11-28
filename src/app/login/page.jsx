import React from "react";
import Image from "next/image";
import BtnLogin from './../components/buttonLogin/BtnLogin';


export default function Login() {

  
    return (
        <div className="contenedorLogin">
            <Image src="/logo.png" width={300} height={300} alt={'Logo'} />
            <BtnLogin />
        </div>
    )
}