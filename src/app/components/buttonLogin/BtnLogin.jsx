"use client"
import { Button } from "@nextui-org/button";
import { Toaster } from 'react-hot-toast';
import { UserAuth } from '../../context/AuthContext'

export default function BtnLogin() {
    const { handleLogin, userExist, handleLogout } = UserAuth()

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            {
                userExist === null
                    ?
                    <Button className="btnLogin" variant="shadow" onClick={handleLogin}>
                        Ingresar con gmail
                    </Button>
                    :
                    <Button onClick={handleLogout} color="danger">
                        Cerrar sesión
                    </Button>
            }
        </>
    )
}
