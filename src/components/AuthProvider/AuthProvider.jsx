import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider   } from "firebase/auth";
import auth from "../Firebase/firebase.config"

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider()
    const fbProvider = new FacebookAuthProvider()
    

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)     
    }


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const fbLogin = ()=> {
        return signInWithPopup(auth, fbProvider)
    }

    const authInfo = {
        registerUser,
        loginUser,
        user, 
        setUser,
        googleLogin
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;