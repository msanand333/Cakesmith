import React from 'react'
import {ReactComponent as FacebookIcon} from '../../assets/images/svg/facebook.svg'
import {ReactComponent as InstagramIcon} from '../../assets/images/svg/instagram.svg'
import {ReactComponent as YoutubeIcon} from '../../assets/images/svg/youtube.svg'
const FooterView = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <ul className="links">
                    <li><a href="javascript:void(0)">FAQ</a></li>
                    <li><a href="javascript:void(0)">Shipping &amp; returns</a></li>
                    <li><a href="javascript:void(0)">Store Policy</a></li>
                    <li><a href="javascript:void(0)">Payments</a></li>
                </ul>
                <ul className="contact">
                    <li>Cakesmith</li>
                    <li><a href="tel:1234567890">Tel 123-4567-890</a></li>
                    <li><a href="mailto:info@mysite.com">Email info@mysite.com</a></li>
                    <li className="social-media-links">
                        <a href="javascript:void(0)"><FacebookIcon/></a>
                        <a href="javascript:void(0)"><InstagramIcon/></a>
                        <a href="javascript:void(0)"><YoutubeIcon/></a>
                    </li>

                </ul>
                <ul className="newsletter">
                    <p>Subscribe to our Newsletter</p>
                    <div>
                        <input placeholder="Enter your email here" type="text"/>
                        <button className="btn-primary">Join</button>
                    </div>

                </ul>

            </div>

        </footer>
    )
}

export default FooterView
