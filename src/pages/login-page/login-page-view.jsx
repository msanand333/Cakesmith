import React, { useState } from 'react'
import { ReactComponent as GoogleIcon } from '../../assets/images/svg/google.svg'
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from 'js/firebase'
import { useHistory } from "react-router-dom";
import { InputField } from '../../components/input-field';
import userServices from 'js/user-services';
import { toast } from 'react-toastify';

const LoginPageView = () => {
    const history = useHistory()

    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const onLoginSuccess = async (user) => {
        const userInfo = await userServices.getUserInfo(user.uid);
        if(!userInfo){
            return history.push('/profile/account-info');
        }
        history.push('/shop')
    }

    const onGoogleLogin = async () => {
        const { user } = await signInWithGoogle();
        await onLoginSuccess(user)
    }

    const onEmailLogin = async () => {
        if(!email || !pass) return
        console.log('staring to sign')
        const { user } = await signInWithEmail(email, pass)
        await onLoginSuccess(user)
    }

    const onEmailSignup = async () => {
        if(!email || !pass) return
        const { user } = await signUpWithEmail(email, pass)
        await onLoginSuccess(user)
    }

    return (
        <main className="login-page">
            <div className="container">
                <button className="btn-primary login-btn" onClick={onGoogleLogin}>
                    Login with Google <GoogleIcon />
                </button>
                <span className="divider"></span>
                <ul className="registeration-wrapper">
                    <li><h3>Register here</h3></li>
                    <InputField label='Email' type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <InputField  label= 'Password' type='password' value={pass} onChange={(event) => setPass(event.target.value)}/>
                    <div>
                        <button onClick={onEmailLogin}>SignIn</button>
                        <button onClick={onEmailSignup}>SignUp</button>
                    </div>
                </ul>

            </div>
           
        </main>
    )
}

export default LoginPageView
