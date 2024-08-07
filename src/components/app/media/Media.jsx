"use client";
import React from "react";
import Slider from "react-slick";
import "./media.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bitmag from "@assets/app/media/bitmag.png";
import Bloom from "@assets/app/media/bloom.png";
import Coindesk from "@assets/app/media/coindesk.png";
import Coingecko from "@assets/app/media/coingecko.png";
import Cointel from "@assets/app/media/cointel.png";
import Yahoo from "@assets/app/media/yahoo.png"
import Cmc from "@assets/app/media/cmc.png";

export default function Media() {

  const settings = {
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 0,
    speed: 500,
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div id="media" className="media">
      <div className="container">
        <Slider {...settings}>
          <div className="media-slider-item">
            <img src={Bitmag.src} alt="bitcoin magazine" />
          </div>
          <div className="media-slider-item">
            <img src={Bloom.src} alt="bloomberg" />
          </div>
          <div className="media-slider-item">
            <img src={Coindesk.src} alt="coin desk" />
          </div>
          <div className="media-slider-item">
            <img src={Coingecko.src} alt="coin gecko" />
          </div>
          <div className="media-slider-item">
            <img src={Cointel.src} alt="coin telegraph" />
          </div>
          <div className="media-slider-item">
            <img src={Yahoo.src} alt="Yahoo" />
          </div>
          <div className="media-slider-item">
            <img src={Cmc.src} alt="coinmarketcap" />
          </div>
        </Slider>
      </div>
    </div>
  )
}