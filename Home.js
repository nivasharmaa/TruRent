import React, { Component } from 'react';





class Home extends Component{
    render(){
        return <div>
            
      {/* <!-- Hero Section --> */}
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

            
        {/* <!-- Main Section --> */}
        <main>
          <section>
            <h2>Why Choose TruRent?</h2>
            <p>TruRent is a leading provider of online truck booking in Pogo. We are dedicated to offering top-notch and affordable transport solutions to businesses nationwide. Through our innovative and seamless transportation services, we strive to bridge the gap between customers, transporters, manufacturers/traders, and others.
      
              Our advanced, user-friendly online booking platform has revolutionized the truck hiring process, making it simpler and faster for our customers. With just a few clicks, users can access a wide range of truck options, select their preferred vehicle, and get the instant truck booking price to fulfill their transportation needs.
              
              Experience hassle-free online truck booking without wasting time, money, and effort. Our cutting-edge online truck booking and truck transport solutions empower businesses to offer on-time deliveries and achieve customer satisfaction and financial growth. Choose TruckGuru as your best online truck booking platform to simplify your logistics operations. Book trucks with us and avail the flawless transportation solutions that cater to your needs.
              
              </p>
          </section>
      {/* <!-- Services --> */}
          <section class="our-services">
              <div class="services-content">
                <h2>Our Services</h2>
                <p>Largest Online Transport Marketplace</p>
                <p>Connect with top transporters, shippers, and transport agents nationwide through TruRent. Enjoy a wide range of options and find the best deals at competitive prices.</p>
                
                <div class="service-cards">
                  <div class="service-card">
                    <h3>Verified Trucks & Daily Active Loads</h3>
                    <p>With over 500+ verified trucks and more than 50 daily active loads available, users can instantly book trucks and loads at the most affordable rates.</p>
                  </div>
            
                  <div class="service-card">
                    <h3>Zero Commission & Transparent Pricing</h3>
                    <p>We pride ourselves on not charging any commissions or hidden costs. Whether you book a mini truck for shifting or larger lorries, there will be no extra charges.</p>
                </div>
            
                  <div class="service-card">
                    <h3>Secure Payment Gateway</h3>
                    <p><p><p>Enjoy peace of mind with our secure payment gateway. Make payments easily and enjoy a seamless online booking experience.</p>
                  </p></p></div>
            
                  <div class="service-card">
                    <h3>24/7 Dedicated Customer Support</h3>
                    <p>We offer round-the-clock customer support to assist you with any booking-related queries or issues you may encounter.</p>
                  </div>
                  
                  <div class="service-card">
                    <h3>Trusted Online Transport Services Provider</h3>
                    <p>We provide transportation solutions, including mini trucks, tempos, containers, and trailer trucks across the country, helping your business grow.</p>
                  </div>
                </div>
              </div>
            </section>
            </main>
      
            <section id="our-trucks" className="trucks-section">
                <h2>Our Trucks</h2>
                <p>Explore our diverse selection of trucks for your transportation needs.</p>

                <div className="truck-gallery">
                    <div className="truck-item">
                    <img src="./images/Truck1.jpeg" alt="Truck 1" />
                    <p>Truck 1: Perfect for small shipments</p>
                    </div>
                    <div className="truck-item">
                    <img src="./images/Truck2.jpeg" alt="Truck 2" />
                    <p>Truck 2: Ideal for medium loads</p>
                    </div>
                    <div className="truck-item">
                    <img src="./images/Truck3.png" alt="Truck 3" />
                    <p>Truck 3: Suitable for large freight</p>
                    </div>
                </div>
                </section>
      
            
      
            {/* How It Works Section */}
                <section>
                <div className="how-it-works">
                    <div className="text-content">
                    <h2>Streamlined processes for a hassle-free experience</h2>
                    <p>Our streamlined process ensures a seamless truck rental experience from start to finish.</p>
                    <ol>
                        <li>
                        <strong>Browse And Select</strong>
                        <br />
                        Explore our diverse selection of trucks and choose your preferred options.
                        </li>
                        <li>
                        <strong>Book And Confirm</strong>
                        <br />
                        Confirm your booking easily.
                        </li>
                        <li>
                        <strong>Confirm And Enjoy</strong>
                        <br />
                        Relax and enjoy your rental experience.
                        </li>
                    </ol>
                    </div>
                    <div className="image-content">
                    <img src="./images/Human2.jpg" alt="Human2" />
                    </div>
                </div>
                </section>

      
      
      {/* <!-- Strengths and Advantages Section --> */}
      <section id="strengths-advantages" class="advantages-section">
        <h2>Our Strengths and Advantages</h2>
        <p>We are very passionate about what we do! We have everything that is required to move your goods safely and damage-free. So, choosing us means picking the smartest way to streamline the moving operations in your business and focus on your core operations.</p>
      
        <div class="advantages-wrapper">
          {/* <!-- Column A --> */}
          <div class="column">
            <div class="advantage-item">
              <h3>Full Load Services</h3>
              <p>We provide Full Truck load transportation services with varied types of trucks available with the click of a button.</p>
            </div>
            <div class="advantage-item">
              <h3>Quick & Easy Portal</h3>
              <p>Hiring a truck is now just a click away, through our hassle-free online booking system.</p>
            </div>
          </div>
      
          {/* Column B (Mobile Image) */}
            <div className="mobile-image">
            <img src="/images/mobile-TruRent.jpg" alt="TruRent Mobile App" />
            </div>

          {/* <!-- Column C --> */}
          <div class="column">
            <div class="advantage-item">
              <h3>Transparent Pricing</h3>
              <p>With our fare calculator, we instantaneously give you the best possible rates online.</p>
            </div>
            <div class="advantage-item">
              <h3>Advance Booking</h3>
              <p>Our vehicle availability is guaranteed on a daily/weekly/monthly basis to ensure on-time reporting.</p>
            </div>
          </div>
        </div>
      </section>
      </div>;
    }

}
export default Home;