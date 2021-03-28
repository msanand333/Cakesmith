import React from 'react'
import { ReactComponent as CartIcon } from '../../assets/images/svg/shopping-cart.svg';
import { Link } from 'react-router-dom';
import firebase from '@firebase/app'
import '@firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCartContext } from 'context/cart-context';

const PageNavigator = () => {
    const [user, loading, error] = useAuthState(firebase.auth())
    const {products} = useCartContext()
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
                <Link to='/admin/order'>
                    Admin Panel
                </Link>
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
