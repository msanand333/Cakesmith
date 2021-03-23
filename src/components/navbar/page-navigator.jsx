import React from 'react'
import { ReactComponent as CartIcon } from '../../assets/images/svg/shopping-cart.svg';
import { Link } from 'react-router-dom';
const PageNavigator = () => {
    return (
        <nav>
            <Link to='/'>
                <a > Home</a>
            </Link>
            <Link to='/shop'>
                <a > Shop</a>
            </Link>
            <Link to='/login'>
                <a > Login</a>
            </Link>
            <Link to='/cart'>
                <a > <CartIcon /> <code>1</code></a>
            </Link>
        </nav>
    )
}

export default PageNavigator;
