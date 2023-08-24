import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
    return(
        <>
        <section className="blogs" id="blogs">
            <div className="slide-container">
            </div>
            <h1 className="heading">our <span>blogs</span></h1>
            <div className="box-container">
                <div className="box">
                    <img src="https://cdn.tgdd.vn/Files/2018/07/27/1104673/co-phai-an-nhieu-rau-cu-la-tot-202112301617596948.jpg" alt=""/>
                    <div className="content">
                        <div className="icons">
                            <a href=""><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>by user</a>
                            <a href=""><i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i>1st may, 2021</a>
                        </div>
                        <h3>Fresh and organic vegitable and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, illo velit nihil adipisci ut optio, nulla sunt cum non dolore esse</p>
                    </div>
                </div>
                <div className="box">
                    <img src="https://vcdn-suckhoe.vnecdn.net/2019/10/18/xcoverimage-1522314845-pagespe-5827-3118-1571373020.jpg" alt=""/>
                    <div className="content">
                        <div className="icons">
                            <a href=""><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>by user</a>
                            <a href=""><i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i>1st may, 2021</a>
                        </div>
                        <h3>Fresh and organic vegitable and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, illo velit nihil adipisci ut optio, nulla sunt cum non dolore esse</p>
                    </div>
                </div>
                <div className="box">
                    <img src="https://kenh14cdn.com/2016/veggies-1455247910474.jpg" alt=""/>
                    <div className="content">
                        <div className="icons">
                            <a href=""><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>by user</a>
                            <a href=""><i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i>1st may, 2021</a>
                        </div>
                        <h3>Fresh and organic vegitable and fruits</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, illo velit nihil adipisci ut optio, nulla sunt cum non dolore esse</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Blogs;