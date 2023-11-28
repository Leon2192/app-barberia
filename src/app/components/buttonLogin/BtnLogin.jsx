"use client"
import { AuthContext, UserAuth } from "@/app/context/AuthContext";
import { Button } from "@nextui-org/button";
import { useContext } from "react";
import { Toaster } from 'react-hot-toast';

export default function BtnLogin() {
    const { handleLogin, handleLogout, userExist } = useContext(AuthContext)

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
                Ingresar con gmail
            </Button>
        </>
    )
}
