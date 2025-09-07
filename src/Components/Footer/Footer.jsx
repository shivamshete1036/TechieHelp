import React from "react";
import "./Footer.css"
import logo from "../Assets/logo.jpg";
import { NavLink } from 'react-router-dom';

const Footer = () =>{
    return (
        <div>
            <footer class="footer">
              <div class="footer-container">
                
                {/* <!-- Company Info --> */}
                <div class="footer-col">
                  <div class="footer-logo">
                    <img src={logo} alt="Logo"/>
                    <h3>Rai Construction Solutions</h3>
                  </div>
                  <p>Where Ideas Take Shape – Complete Construction Consultancy Under One Roof!</p>
                  <ul class="contact-info">
                    <li><i class="fas fa-map-marker-alt"></i> Jodhpur, Rajasthan, India</li>
                    <li><i class="fas fa-phone-alt"></i> +91 9588848557</li>
                    <li><i class="fas fa-envelope"></i> info@raiconstructionsolutions.com</li>
                  </ul>
                  <div class="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </div>
                </div>
            
                {/* <!-- Quick Links --> */}
                <div class="footer-col">
                  <h4>Quick Links</h4>
                  <ul class="footer-links">
           <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
             Our Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
             Our Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
           Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </li>
                  </ul>
                </div>
            
                {/* <!-- Newsletter --> */}
                <div class="footer-col">
                  <h4>Newsletter</h4>
                  <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email" required/>
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
            
              </div>
            
              {/* <!-- Bottom Bar --> */}
              <div class="footer-bottom">
                <p>© <span>Rai Construction Solutions</span> 2025. All Rights Reserved.</p>
                <a href="#" class="back-to-top"><i class="fas fa-arrow-up"></i></a>
              </div>
            </footer>
        </div>
    );

}


export default Footer;