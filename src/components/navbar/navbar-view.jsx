import React from 'react'
import {ReactComponent as BrandLogo} from '../../assets/images/svg/Logo-WithTagline.svg';


const NavbarView = ()=>{
    return (
        <header>
            <a className="brand" href=""> 
            <BrandLogo/>
            </a>
            <nav>
              <a href=""> Home</a>
              <a href=""> Shop</a>
              <a href=""> About</a>
              <a href=""> Contact</a>
              <a href=""> Cart</a>

            </nav>
        </header>
    )
}

export default NavbarView;
