import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <main>
          {/* About Us Section */}
          {/* Hero Section */}
          <section className="about-hero">
            <div className="hero-content">
              <h1>About TruRent</h1>
              <p>Delivering the Best Truck Rental Experience</p>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="mission-section">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                At TruRent, our mission is to offer a smooth and hassle-free truck rental service that meets your every need, ensuring that your goods are delivered safely and on time.
              </p>
            </div>
          </section>

          {/* Our Team Section */}
          <section id="team" className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-wrapper">
              <div className="team-member">
                <img src="/images/Human7.jpg" alt="Alex, Rental Specialist" />
                <h3>Alex</h3>
                <p>Rental Specialist</p>
              </div>
              <div className="team-member">
                <img src="/images/Human3.jpg" alt="Jordan, Customer Service" />
                <h3>Jordan</h3>
                <p>Customer Service</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default About;