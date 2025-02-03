import React, { Component } from 'react';





class Services extends Component{
    render(){
        return <div>
     
         {/* Main Section */}
         <main>
          
          {/* Hero Section */}
        <header className="services-hero">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive Transport Solutions for Your Business</p>
          </div>
        </header>
            {/* <!-- Services Section --> */}
            <section class="services-section">
              <h2>Explore Our Services</h2>
              <div class="services-grid">
                <div class="service-item">
                  <h3>Heavy Duty Trucking</h3>
                  <p>We offer a wide range of heavy-duty trucks to handle your biggest deliveries.</p>
                </div>
                <div class="service-item">
                  <h3>Refrigerated Trucks</h3>
                  <p>Our refrigerated trucks are ideal for transporting perishable goods.</p>
                </div>
                <div class="service-item">
                  <h3>Container Transport</h3>
                  <p>Efficient container transport for all types of cargo, ensuring safe delivery.</p>
                </div>
                <div class="service-item">
                  <h3>Real-Time Tracking</h3>
                  <p>Track your shipments in real-time and stay updated on their status.</p>
                </div>
                <div class="service-item">
                  <h3>24/7 Support</h3>
                  <p>Our customer service team is available 24/7 to assist with your needs.</p>
                </div>
                <div class="service-item">
                  <h3>Zero Commission Booking</h3>
                  <p>We offer transparent pricing with zero commission, giving you the best deals.</p>
                </div>
              </div>
            </section>
            </main>
          
      </div>
    }

}
export default Services;