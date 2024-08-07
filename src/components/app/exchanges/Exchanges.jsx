"use client";
import React from "react";
import Slider from "react-slick";
import "./exchanges.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Binance from "@assets/app/exchanges/binance.png";
import Bitfinex from "@assets/app/exchanges/bitfinex.png";
import Coinbase from "@assets/app/exchanges/coinbase.png";
import Cryptocom from "@assets/app/exchanges/cryptocom.png";
import Gateio from "@assets/app/exchanges/gateio.png";
import Huobi from "@assets/app/exchanges/huobi.png";
import Kraken from "@assets/app/exchanges/kraken.png";

export default function Exchanges() {

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
    <div id="exchanges" className="exchanges">
      <div className="container">
        <Slider {...settings}>
          <div className="exchanges-slider-item">
            <img src={Binance.src} alt="binance" />
          </div>
          <div className="exchanges-slider-item">
            <img src={Bitfinex.src} alt="bitfinex" />
          </div>
          <div className="exchanges-slider-item">
            <img src={Coinbase.src} alt="coinbase" />
          </div>
          <div className="exchanges-slider-item">
            <img src={Cryptocom.src} alt="cryptocom" />
          </div>
          <div className="exchanges-slider-item">
            <img src={Gateio.src} alt="gateio" />
          </div>
          <div className="exchanges-slider-item">
            <img src={Huobi.src} alt="huobi" />
          </div>
          <div className="exchanges-slider-item">
            <img src={Kraken.src} alt="kraken" />
          </div>
        </Slider>
      </div>
    </div>
  )
}