import React from 'react';
import Categories from './Categories';
import Features from './Features';
import Review from './Reviews';
import Blogs from './Blogs';
import Banner from './Banner';
import '../css/Home.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Categories></Categories>
            <Blogs></Blogs>
            <Footer></Footer>
        </>
    )
}

export default Home;