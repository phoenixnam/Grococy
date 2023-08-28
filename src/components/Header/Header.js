import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass, faTrash, faUser, faBagShopping,
    faBasketShopping, faBars, faRightFromBracket
}
    from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = ({ handleLogout }) => {
    const [searchFormActive, setSearchFormActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [shoppingCartActive, setShoppingCartActive] = useState(false);
    const [loginFormActive, setLoginFormActive] = useState(false);

    const handleSearchClick = () => {
        setSearchFormActive(!searchFormActive);
        setMenuActive (false);
        setShoppingCartActive(false);
        setLoginFormActive(false);
    };

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
        setSearchFormActive(false);
        setShoppingCartActive(false);
        setLoginFormActive(false);
    };

    const handleCartClick = () => {
        setShoppingCartActive(!shoppingCartActive);
        setMenuActive(false);
        setSearchFormActive(false);
        setLoginFormActive(false);
    };
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setLoginFormActive(!loginFormActive);
        setMenuActive(false);
        setSearchFormActive(false);
        setShoppingCartActive(false);
        navigate('/login');
    };

    const handleLogoutClick = () => {
        handleLogout(); 
    };

    const handleScroll = () => {
        setMenuActive(false);
        setSearchFormActive(false);
        setShoppingCartActive(false);
        setLoginFormActive(false);
    };


    window.onscroll = handleScroll;

    return (
        <>
            <header className="header">
                <a href="./home" className="logo"><i><FontAwesomeIcon icon={faBasketShopping} />groco</i></a>
                <nav className={`navbar ${menuActive ? 'active' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#features">Features</a>
                    <a href="#categoris">Categories</a>
                    <a href="#blogs">Blogs</a>
                </nav>

                <div className="icons">
                    <div className="" id="menu-btn" onClick={handleMenuClick}><FontAwesomeIcon icon={faBars} /></div>
                    <div className="" id="search-btn" onClick={handleSearchClick}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <div className="" id="cart-btn" onClick={handleCartClick}><FontAwesomeIcon icon={faBagShopping} /></div>
                    <div className="" id="login-btn" onClick={handleLoginClick}><FontAwesomeIcon icon={faUser} /></div>
                    <div onClick={handleLogoutClick}><FontAwesomeIcon className='logout' icon={faRightFromBracket} /></div>

                </div>
                <form action="" className={`search-form ${searchFormActive ? 'active' : ''}`}>
                    <input type="search" name="" id="search-box" placeholder="search here..." />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </form>
                <div className={`shopping-cart ${shoppingCartActive ? 'active' : ''}`}>
                    <div className="box">
                        <FontAwesomeIcon icon={faTrash} />
                        <img src="https://product.hstatic.net/1000282430/product/seedless-watermelon-around-2.5kg-whole-fruit_23a860613aa94413aca16b9d766f6291_master.jpg" alt="" />
                        <div className="content">
                            <h3>Watermelon</h3>
                            <span className="price">$4.99</span>
                            <span className="quality">qty: 1</span>
                        </div>
                    </div>
                    <div className="total">Total: $19.69</div>
                    <a href="#" className="btn">Checkout</a>
                </div>
            </header>
        </>
    );
}

export default Header;