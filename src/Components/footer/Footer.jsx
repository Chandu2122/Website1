import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Chandu</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#Qualification" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="mailto: chanduamaravadhi99@gmail.com" className="footer__social-icon" target="_blank"><i class='bx bxl-gmail' ></i></a>

            <a href="https://www.instagram.com/chandu_amaravadhi/" className="footer__social-icon" target="_blank"><i className="bx bxl-instagram"></i></a>

            <a href="https://www.linkedin.com/in/chandu-amaravadhi-47426927a/" className="footer__social-icon" target="_blank"><i className="bx bxl-linkedin"></i></a>
            </div>

            <span className="footer__copy">Chandu Amaravadhi.All rights are reserved</span>
        </div>
    </footer>

  )
}

export default Footer