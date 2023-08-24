import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingBasket, faPhone, faEnvelope, faMapMarkerAlt, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>groco <i className="color"><FontAwesomeIcon icon={faShoppingBasket} /></i></h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi at cumque corporis dolor temporibus.</p>
                    <div className="share">
                        <a href="#" className="links"><FontAwesomeIcon className='color' icon={faFacebookF} /></a>
                        <a href="#" className="links"><FontAwesomeIcon className='color' icon={faLinkedin} /></a>
                        <a href="#" className="links"><FontAwesomeIcon className='color' icon={faInstagram} /></a>
                        <a href="#" className="links"><FontAwesomeIcon className='color' icon={faTwitter} /></a>
                    </div>
                </div>
                <div className="box">
                    <h3>contact infor</h3>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faPhone} />+84 954 987 888</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faPhone} />+84 954 987 888</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faEnvelope} />phuong@gmail.com</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faMapMarkerAlt} />Da Nang, Vietnam</a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faArrowRight} />home</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faArrowRight} />features</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faArrowRight} />products</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faArrowRight} />categories</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faArrowRight} />review</a>
                    <a href="#" className="links"><FontAwesomeIcon className='color' icon={faArrowRight} />blogs</a>
                </div>
                <div className="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest update</p>
                    <input type="email" className="email" placeholder="your email" />
                    <input type="submit" value="subscribe" className="btn" />
                    <img src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png" alt="" className="payment-img" />
                </div>
            </div>
            <div className="credit">created by <span>mr. web designer</span> all rights reserved</div>
        </section>
    );
}

export default Footer;
