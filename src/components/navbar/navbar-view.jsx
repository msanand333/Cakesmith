import React from 'react'
import { ReactComponent as BrandLogo } from '../../assets/images/svg/Logo-WithTagline.svg';
import PageNavigator from './page-navigator';

const NavbarView = () => {
    return (
        <header className="navigation-header">
            <div className="container">
                <a className="brand-logo" href="/">
                    <BrandLogo />
                </a>
                <PageNavigator/>
              
            </div>

        </header>
    )
}

export default NavbarView;
