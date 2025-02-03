import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <header>
      <div className="navbar">
        <div className="logo">
          <a href="/about">TruRent</a>
        </div>
        <nav>
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
        <a href="/" className="book-btn">Book A Rental</a>
      </div>
      </header>
    );
  }
}

export default Navbar;