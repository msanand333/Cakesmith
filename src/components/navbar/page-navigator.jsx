import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/images/svg/shopping-cart.svg';

const PageNavigator = () => {
    return (
        <nav>
            <a href=""> Home</a>
            <a href=""> Shop</a>
            <a href=""> About</a>
            <a href=""> Contact</a>
            <a href=""> <CartIcon/> <code>1</code></a>
        </nav>
    )
}

export default PageNavigator;
