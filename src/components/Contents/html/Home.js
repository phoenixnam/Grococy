import React from 'react';
import '../css/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <section className="home" id="home">
                <div className="content">
                    <h3>Fresh and <span>organic</span> product for you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime quasi ducimus inventore voluptatibus consequatur nostrum accusantium,
                        similique quidem explicabo molestias ab officia, laboriosam ullam, veritatis laudantium ipsa
                        temporibus voluptas. Excepturi. Lorem</p>
                    <a href="#" className="btn">Shop now</a>
                </div>
            </section>
            <section className="features" id="features">
                <h1 className="heading">our <span>features</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src="https://tieudungchatluong.net/wp-content/uploads/2021/10/cac-loai-rau-cu-1.jpg" alt="" />
                        <h3>Fresh and organic</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam veritatis voluptatem ut ab
                            consectetur voluptate laboriosam veniam, est fugiat quidem unde! Libero illo reiciendis nulla
                            deleniti minus cupiditate doloribus!</p>
                        <a href="#" className="btn"> read more</a>
                    </div>
                    <div className="box">
                        <img src="https://media.cooky.vn/images/blog-2016/5-cach-chon-rau-cu-qua-tuoi-ngon-2.jpg" alt="" />
                        <h3>Fresh and organic</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Natus nam veritatis voluptatem ut ab consectetur voluptate laboriosam veniam, est fugiat quidem unde! Libero illo reiciendis nulla
                            est fugiat quidem unde! Libero illo reiciendis nulla deleniti minus cupiditate doloribus!</p>
                        <a href="#" className="btn"> read more</a>
                    </div>
                    <div className="box">
                        <img src="http://soyte.hatinh.gov.vn/upload/1000030/20171026/f1c951b0c583dfafc0f6e9a514fd7ec3106d021t3098l0.jpg"
                            alt="" />
                        <h3>Fresh and organic</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Natus nam veritatis voluptatem ut ab consectetur voluptate laboriosam veniam,
                            est fugiat quidem unde! Libero illo reiciendis nulla deleniti minus cupiditate doloribus!</p>
                        <a href="#" className="btn"> read more</a>
                    </div>
                </div>
            </section>
            <section className="categories" id="categories">
                <div className="heading">product <span>categories</span></div>
                <div className="box-container">
                    <div className="box">
                        <img src="https://tepbac.com/upload/news/ge_image/2022/09/2_1663666420.jpg" alt="" />
                        <h3>vegetable</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/19/1025152/Kiem-Tra-Ca-Tuoi-Son-01.jpg"
                            alt="" />
                        <h3>vegitable</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <img src="https://tepbac.com/upload/news/ge_image/2022/09/2_1663666420.jpg" alt="" />
                        <h3>vegitable</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                    <div className="box">
                        <img src="https://tepbac.com/upload/news/ge_image/2022/09/2_1663666420.jpg" alt="" />
                        <h3>vegitable</h3>
                        <p>upto 45% off</p>
                        <a href="#" className="btn">shop now</a>
                    </div>
                </div>
            </section>
            <section className="blogs" id="blogs">
                <div className="slide-container">
                </div>
                <h1 className="heading">our <span>blogs</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src="https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/rkznae/2020_01_08/foody_mobile_rau_sach1_jpg_670_635719445207028825_SUBP.jpg" alt="" />
                        <div className="content">
                            <div className="icons">
                                <a href=""><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>by user</a>
                                <a href=""><i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i>1st may, 2023</a>
                            </div>
                            <h3 style={{ fontSize: '16px' }}>Fresh and organic vegitable and fruits</h3>
                            <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, illo velit nihil adipisci ut optio, nulla sunt cum non dolore esse</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://vcdn-suckhoe.vnecdn.net/2019/10/18/xcoverimage-1522314845-pagespe-5827-3118-1571373020.jpg" alt="" />
                        <div className="content">
                            <div className="icons">
                                <a href=""><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>by user</a>
                                <a href=""><i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i>1st may, 2023</a>
                            </div>
                            <h3 style={{ fontSize: '16px' }}>Fresh and organic vegitable and fruits</h3>
                            <p style={{ fontSize: '13px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, illo velit nihil adipisci ut optio, nulla sunt cum non dolore esse</p>
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://kenh14cdn.com/2016/veggies-1455247910474.jpg" alt="" />
                        <div className="content">
                            <div className="icons">
                                <a href=""><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>by user</a>
                                <a href=""><i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i>1st may, 2023</a>
                            </div>
                            <h3 style={{ fontSize: '16px' }}>Fresh and organic vegitable and fruits</h3>
                            <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, illo velit nihil adipisci ut optio, nulla sunt cum non dolore esse</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Home;