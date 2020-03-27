import React from "react";
import "./footer.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.png";
import img6 from "./img6.jpg";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div
          className="about-us" /*data-aos="fade-right" data-aos-delay="200"*/
        >
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia atque nemo ad modi officiis iure, autem nulla tenetur
            repellendus.
          </p>
        </div>
        <div
          className="newsletter" /*data-aos="fade-right" data-aos-delay="200"*/
        >
          <h2>Newsletter</h2>
          <p>Stay updated</p>
          <div className="form-element">
            <input type="text" placeholder="Email" />
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div
          className="instagram" /*data-aos="fade-left" data-aos-delay="200"*/
        >
          <h2>Instagram</h2>
          <div className="flex-row">
            <img src={img1} alt="insta1" />
            <img src={img2} alt="insta2" />
            <img src={img3} alt="insta3" />
          </div>
          <div className="flex-row">
            <img src={img4} alt="insta4" />
            <img src={img5} alt="insta5" />
            <img src={img6} alt="insta6" />
          </div>
        </div>
        <div className="follow" /*data-aos="fade-left" data-aos-delay="200"*/>
          <h2>Follow us</h2>
          <p>Be Social</p>
          <div>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="rights flex-row">
        <h4 className="text-gray">
          Copyright ©2020 All rights reserved | made by
          <a href="https://veebee3.github.io" target="_black">
            {"  "}V Mensah
          </a>
        </h4>
      </div>
      <div className="move-up">
        <span>
          <a
            href="#tag"
            alt="scrolls up"
            className="fas fa-arrow-circle-up fa-2x"
          ></a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
