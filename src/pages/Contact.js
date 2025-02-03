import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <main>
        <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help you with any inquiries or support.</p>
        </div>
      </section>
          {/* Contact Info & Map Section */}
          <section className="contact-info-grid">
            <div className="grid-container">
              {/* Contact Details */}
              <div className="contact-details-grid">
                <h2>Get in Touch</h2>
                <address>
                  <p>
                    <strong>Office:</strong> 123 TruRent Avenue, Pogo City, PC 56789
                  </p>
                  <p>
                    <strong>Phone:</strong> (123) 456-7890
                  </p>
                  <p>
                    <strong>Email:</strong> support@trurent.com
                  </p>
                </address>
                <p>Our team is available 24/7 to assist you. Drop us a message or call for quick support!</p>
              </div>

              {/* Map Section */}
              <div className="contact-map-grid">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  allowFullScreen
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="contact-form-advanced">
            <h2>Drop Us a Message</h2>
            <form action="#" method="POST" className="advanced-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  pattern="[A-Za-z\s]+"
                  title="Name should only contain letters and spaces"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  required
                  pattern="[\d\s]{10,14}"
                  title="Phone number should be 10-14 digits"
                />
              </div>
              <textarea
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default Contact;