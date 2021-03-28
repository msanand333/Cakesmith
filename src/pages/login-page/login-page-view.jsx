import React from 'react'
import { ReactComponent as GoogleIcon } from '../../assets/images/svg/google.svg'
import { signInWithGoogle } from 'js/firebase'
import { useHistory } from "react-router-dom";

const LoginPageView = () => {
    const history = useHistory()
    const onLogin = async () => {
        await signInWithGoogle();
        history.push('/shop')
    }
    return (
        <main className="login-page">
            <button className="btn-primary login-btn" onClick={onLogin}>
                Login with Google <GoogleIcon />
            </button>
        </main>
    )
}

export default LoginPageView
