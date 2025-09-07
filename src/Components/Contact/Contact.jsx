import React from "react";
import "./Contact.css";
import map from "../Assets/map.jpeg"
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>
            We're here to help you turn your construction dreams into reality.
            Reach out to us through any of the channels below.
          </p>

          <div className="info-box">
            <i className="fa-solid fa-location-dot"></i> Jodhpur, Rajasthan,
            India
          </div>
          <div className="info-box">
            <i className="fa-solid fa-phone"></i> +91 8003431008
          </div>
          <div className="info-box">
            <i className="fa-solid fa-envelope"></i> info@raiconstruction.com
          </div>
          <div className="info-box">
            <i className="fa-solid fa-clock"></i> Monday - Saturday: 9:00 AM -
            6:00 PM <br /> Sunday: Closed
          </div>

          {/* OPTION 1: Clickable Map */}
          <div className="map-box">
            <a
              href="https://www.google.com/maps/place/Jodhpur,+Rajasthan,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={map} alt="Map" />
              <p>
                <i className="fa-solid fa-map-pin"></i> Interactive Map <br />
                <small>Visit our office location</small>
              </p>
            </a>
          </div>

          {/* OPTION 2: Embedded Map (uncomment if you prefer embed) */}
          {/*
          <div className="map-box">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.2028329166493!2d72.99899311504004!3d26.23894698342409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5f1a64d0a3%3A0x44dbd727f5661e5b!2sJodhpur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1693837746432!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          */}
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email Address *" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Company/Organization" />
            </div>
            <div className="form-group">
              <select>
                <option>Select service</option>
                <option>BIM 3D Modeling</option>
                <option>Interior Design</option>
                <option>Consultation</option>
              </select>
              <select>
                <option>Select project type</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Tell us about your project requirements..."
                required
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Submit <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
