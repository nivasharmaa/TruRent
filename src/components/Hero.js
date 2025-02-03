import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to TruRent</h1>
          <p>Online Truck Booking Made Easy</p>
          <form className="hero-form">
            <input type="text" placeholder="Pick Up City Location" required />
            <input type="text" placeholder="Drop City Location" required />
            <button type="submit" className="check-fare-btn">Check Fare</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Hero;