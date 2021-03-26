import React from 'react'
import { ReactComponent as CartIcon } from '../../assets/images/svg/shopping-cart.svg';
import { Link } from 'react-router-dom';
const PageNavigator = () => {
    return (
        <nav>
            <Link to='/'>
               Home
            </Link>
            <Link to='/shop'>
                Shop
            </Link>
            <Link to='/login'>
                 Login
            </Link>
            <Link to='/profile'>
             Profile
            </Link>
            <Link to='/admin'>
                Admin Panel
            </Link>
            <Link to='/cart'>
                <CartIcon /> <code>1</code>
            </Link>
        </nav>
    )
}

export default PageNavigator;
