import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel2";
const options = {
  items: 3,
  nav: false,
  rewind: true,
  autoplay: true,
};
import "./App.css";


function App() {
  return (
    <main className="site-main ">
      <header className="header_area ">
      <div className="main-menu">
        <nav
          className="navbar  navbar-expand-lg navbar-light"  >
          <a className="navbar-brand" href="#">
            <strong>Header</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto" />
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>  
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <section className="previews text-center" id="previews">
        <span className="h-span">Clients</span>
        <h2 className="h1">
          {" "}
          <i className="fas fa-quote-left  " /> previews
          <span className="underline">
            <span className="r-square"></span>
            <span className="l-square"></span>
          </span>
        </h2>
        <div className="container">
          <OwlCarousel className="owl-carousel owl-theme" options={options}>
            <div className="item text-left">
              <div className="figure d-block">
                <img
                  src="images/previews/client1.jpg"
                  className="img-fluid d-block rounded-circle"
                  alt="Client photo"
                />
              </div>
              <p className="item-p">
                Hassan was quick with the job and produced the good quality site
                I had been expecting. He was happy to make improvements as soon
                as I suggested them, and got the job done effectively. I
                strongly recommend him for website development{" "}
              </p>
              <div className="rate">
                <h3>Maxwell Kimaiyo</h3>
                <p className="desc">Web Developer</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <i className="fas fa-quote-right fa-2x right qoute"></i>
              </div>
            </div>
            <div className="item text-left">
              <div className="figure d-block">
                <img
                  src="images/previews/client2.jpg"
                  className="img-fluid d-block rounded-circle"
                  alt="Client photo"
                />
              </div>
              <p className="item-p">
                Hassan was quick with the job and produced the good quality site
                I had been expecting. He was happy to make improvements as soon
                as I suggested them, and got the job done effectively. I
                strongly recommend him for website development{" "}
              </p>
              <div className="rate">
                <h3>Maxwell Kimaiyo</h3>
                <p className="desc">Web Developer</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <i className="fas fa-quote-right fa-2x right qoute"></i>
              </div>
            </div>
            <div className="item text-left">
              <div className="figure d-block">
                <img
                  src="images/previews/client3.jpg"
                  className="img-fluid d-block rounded-circle"
                  alt="Client photo"
                />
              </div>
              <p className="item-p">
                Hassan was quick with the job and produced the good quality site
                I had been expecting. He was happy to make improvements as soon
                as I suggested them, and got the job done effectively. I
                strongly recommend him for website development{" "}
              </p>
              <div className="rate">
                <h3>Maxwell Kimaiyo</h3>
                <p className="desc">Web Developer</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <i className="fas fa-quote-right fa-2x right qoute"></i>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <footer className="footer-area">
  <div className="container">
   
      <div className="site-logo text-center py-4">
      </div>
      <div className="social text-center">
        <h5 className="text-uppercase">Follow me</h5>
        <a href="#"><i className="fab fa-facebook" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-youtube" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
      </div>
      <div className="copyrights text-center">
        <p className="para">
          Copyright ©2019 All rights reserved 
        </p>
      </div>
    </div>
 
</footer>
    </main>
  );
}

export default App;
