"use client"
import Image from 'next/image'
import Login from './login/page'
import toast, { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/AuthContext'


export default function Home() {

  return (
    <AuthContextProvider>
      <div>
        <Login />
      </div>
    </AuthContextProvider>

  )
}
