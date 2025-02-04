import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false, // State to track if mobile menu is open
    };
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen, // Toggle the menu
    }));
  };

  render() {
    return (
      <header>
        <div className="navbar">
          {/* Logo on the left */}
          <div className="logo">
            <a href="/">TruRent</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={this.toggleMobileMenu}>
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={this.state.isMobileMenuOpen ? "nav-links open" : "nav-links"}>
            <ul>
              <li><a href="/">Home</a></li>
              <li>
                <a href="/trucks">Our Trucks</a>
                <ul className="dropdown">
                  <li><a href="/trucks">Truck 1</a></li>
                  <li><a href="/trucks">Truck 2</a></li>
                  <li><a href="/trucks">Truck 3</a></li>
                  <li><a href="/trucks">Truck 4</a></li>
                </ul>
              </li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </nav>

          {/* Book A Rental Button */}
          <a href="/" className="book-btn">Book A Rental</a>
        </div>
      </header>
    );
  }
}

export default Navbar;
