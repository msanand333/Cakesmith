import React from 'react'
import { ReactComponent as GoogleIcon } from '../../assets/images/svg/google.svg'
import { signInWithGoogle } from 'js/firebase'
import { useHistory } from "react-router-dom";
import { InputField } from '../../components/input-field';

const LoginPageView = () => {
    const history = useHistory()
    const onLogin = async () => {
        await signInWithGoogle();
        history.push('/shop')
    }
    return (
        <main className="login-page">
            <div className="container">
                <button className="btn-primary login-btn" onClick={onLogin}>
                    Login with Google <GoogleIcon />
                </button>
                <span className="divider"></span>
                <ul className="registeration-wrapper">
                    <li><h3>Register here</h3></li>
                    <InputField label='Email' type='email'/>
                    <InputField  label= 'Password'type='password'/>
                </ul>

            </div>
           
        </main>
    )
}

export default LoginPageView
