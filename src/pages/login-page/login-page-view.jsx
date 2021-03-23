import React from 'react'
import {ReactComponent as GoogleIcon} from '../../assets/images/svg/google.svg'
const LoginPageView = () => {
    return (
        
        <main className="login-page">
            <button className="btn-primary login-btn">
            Login with Google <GoogleIcon/>
            </button>
        </main>
    )
}

export default LoginPageView
