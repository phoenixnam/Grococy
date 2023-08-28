

import React, { Component } from "react";
import Swiper from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
class Review extends Component {
  // componentDidMount() {
  //   const swiper = new Swiper(".review-slider", {
  //     loop: true,
  //     spaceBetween: 20,
  //     autoplay: {
  //       delay: 7500,
  //       disableOnInteraction: false
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 1
  //       },
  //       768: {
  //         slidesPerView: 2
  //       },
  //       1020: {
  //         slidesPerView: 3
  //       }
  //     }
  //   });
  // }

  render() {
    return (
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>
        <div className="swiper review-slider">
          
          <div className="swiper-wrapper">
                    <div className="swiper-slide box">
                        <img src="https://hn.check.net.vn/Data/product/mainimages/original/product9396.jpg"
                            alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit
                            Sed ullam nobis architecto provident animi modi reprehenderit in iste deserunt,
                            ad libero, quam praesentium. Aut modi optio aliquam quidem animi sed.</p>
                        <h3>John Deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt} /></i>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="swiper-slide box">
                        <img src="https://www.healthygallatin.org/wp-content/uploads/2015/12/avo-1-800x600.jpg"
                            alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit
                            Sed ullam nobis architecto provident animi modi reprehenderit in iste deserunt,
                            ad libero, quam praesentium. Aut modi optio aliquam quidem animi sed.</p>
                        <h3>John Deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt} /></i>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                    <div className="box swiper-slide">
                        <img src="https://static.hotdeal.vn/images/615/614826/500x500/124671-1kg-le-tuoi-han-quoc-nhap-khau-100-cho-dip-le-tet.jpg"
                            alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit
                            Sed ullam nobis architecto provident animi modi reprehenderit in iste deserunt,
                            ad libero, quam praesentium. Aut modi optio aliquam quidem animi sed.</p>
                        <h3>John Deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt} /></i>
                        </div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                </div>
         
        </div>
      </section>
    );
  }
}

export default Review;
