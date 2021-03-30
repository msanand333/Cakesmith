/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { ReactComponent as CartIcon } from '../../assets/images/svg/shopping-cart.svg';
import { Link } from 'react-router-dom';
import firebase from '@firebase/app'
import '@firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCartContext } from 'context/cart-context';
import { ROLE, useRole } from 'js/iam';
import { logout } from 'js/firebase';

const PageNavigator = () => {
    const [user, loading, error] = useAuthState(firebase.auth())
    const {products} = useCartContext()
    const role = useRole()
    const quantity = products.length
    return (
        <nav>
            {
                user ?
                    <>
                        <Link to='/'>
                        Home
                        </Link>
                        <Link to='/shop'>
                            Shop
                        </Link>
                        <Link to='/profile'>
                        Profile
                        </Link>
                        <a onClick={async() => {
                            await logout(); 
                            // eslint-disable-next-line no-restricted-globals
                            location.href = '/';
                        }} href="#">
                        Logout
                        </a>
                        {
                            role === ROLE.OWNER && <Link to='/admin/order'>
                                Admin Panel
                            </Link>
                        }
                        <Link to='/cart'>
                            <CartIcon /> <code>{quantity}</code>
                        </Link>
                    </> : 
                    <Link to='/login'>
                        Login
                    </Link>
            }
        </nav>
    )
}

export default PageNavigator;
