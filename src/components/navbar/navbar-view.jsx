import React from 'react'
import BrandLogo  from '../../assets/images/jpg/brand-logo.jpg';
import PageNavigator from './page-navigator';

const NavbarView = () => {
    return (
        <header className="page-header">
            <div className="container">
                <a className="brand-logo" href="/">
                    <img src={BrandLogo} alt=""/>
                </a>
                <PageNavigator/>
              
            </div>

        </header>
    )
}

export default NavbarView;
