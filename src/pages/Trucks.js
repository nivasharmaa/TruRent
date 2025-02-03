import React from "react";


class Trucks extends React.Component {
  render() {
    return (
      <div>

        {/* Main Section */}
        <main>

          {/* Trucks Hero Section */}
          <header className="trucks">
            <div className="hero-content">
              <h1>Our Fleet of Trucks</h1>
              <p>Choose from a variety of trucks to suit your needs</p>
            </div>
          </header>

          {/* Our Trucks Section */}
          <section className="trucks-section">
            <h2>Explore Our Fleet</h2>
            <div className="truck-gallery">
              <div className="truck-item">
                <img src="/images/Truck1.jpeg" alt="Truck 1" />
                <p>Heavy Duty Truck</p>
              </div>
              <div className="truck-item">
                <img src="/images/Truck2.jpeg" alt="Truck 2" />
                <p>Medium Load Truck</p>
              </div>
              <div className="truck-item">
                <img src="/images/Truck3.png" alt="Truck 3" />
                <p>Mini Truck</p>
              </div>
              <div className="truck-item">
                <img src="/images/Truck4.jpg" alt="Truck 4" />
                <p>Refrigerated Truck</p>
              </div>
              <div className="truck-item">
                <img src="/images/Truck4.jpg" alt="Truck 5" />
                <p>Container Truck</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Trucks;