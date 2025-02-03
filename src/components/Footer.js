import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h2 style={{ color: '#ff6900' }}>TruRent</h2>
            <p>Experience the ease and convenience of renting a truck with TruRent.</p>
          </div>
          <div className="footer-links">
            <h3 style={{ color: '#ff6900' }}>Legal Policy</h3>
            <ul>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Legal Notice</a></li>
              <li><a href="/">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 style={{ color: '#ff6900' }}>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/trucks">Our Trucks</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>
          <div className="footer-subscribe">
            <h3 style={{ color: '#ff6900' }}>Subscribe To The Newsletters</h3>
            <form>
              <input type="email" placeholder="Email..." required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-bottom">
            <p>© 2024 TruRent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;