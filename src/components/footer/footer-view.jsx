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
                    <li>Just Cakes</li>
                    <li><a href="tel: 8013099290">Tel  8013099290</a></li>
                    <li><a href="mailto:justcakes2512@gmail.com">Email justcakes2512@gmail.com</a></li>
                    <li className="social-media-links">
                        <a href="https://www.facebook.com/justcakes2512/"><FacebookIcon/></a>
                        <a href="https://instagram.com/justcakes_____?igshid=xaocnqidnao8"><InstagramIcon/></a>
                        <a href="https://youtube.com/channel/UCLi_e7rK5w7YzgFu1iRBJyw"><YoutubeIcon/></a>
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
