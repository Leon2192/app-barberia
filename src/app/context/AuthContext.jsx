import { useContext, createContext, useState, useEffect } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const firebaseConfig = {
        apiKey: "AIzaSyCjMVzLiryaABg_Yc1Wco5cvrzp67DoUWw",
        authDomain: "ranking-peluqueriapp.firebaseapp.com",
        projectId: "ranking-peluqueriapp",
        storageBucket: "ranking-peluqueriapp.appspot.com",
        messagingSenderId: "850437328091",
        appId: "1:850437328091:web:dcae914475c8405e60d0fe",
        measurementId: "G-J543N4YJ60"
    };
    const app = initializeApp(firebaseConfig);
    //  const analytics = getAnalytics(app);
    const auth = getAuth();

    const [userExist, setUserExist] = useState(null)
    const [dataUser, setDataUser] = useState([])
    const router = useRouter()

    const handleLogout = async () => {
        signOut(auth).then(() => {
            setUserExist(null)
            toast.success(`Gacias vuelvas prontos! ${dataUser.displayName}`)
        }).catch((error) => { });
    }

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            //setUserExist(user) // ESTE ESTADO LO USO PARA SWITCHEAR EL BOTON DE INGRESAR MAIL CON EL DE CERRAR SESION
            setDataUser(user); // EN ESTE ESTADO MUESTRO DATA DEL USUARIO
            toast.success(`Bienvenido/a! ${result.user.displayName}`);

            // IdP data available using getAdditionalUserInfo(result)
            // Redirigir a la página principal
            router.push('/inicio');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        }
    };


    return (
        <AuthContext.Provider value={{
            provider,
            firebaseConfig,
            app,
            auth,
            userExist,
            setUserExist,
            dataUser,
            setDataUser,
            handleLogout,
            handleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(AuthContext)
}