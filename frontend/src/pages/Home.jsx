import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Utensils, ShoppingBag, Truck, Smartphone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { restaurantInfo, menuItems, services, reviews } from '../mockData';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Hello! I would like to place an order from Mazaa Munch.");
    window.open(`https://wa.me/${restaurantInfo.phone}?text=${message}`, '_blank');
  };

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${restaurantInfo.mapCode}`, '_blank');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const getServiceIcon = (title) => {
    switch(title) {
      case 'Dine-In': return <Utensils />;
      case 'Kerbside Pickup': return <ShoppingBag />;
      case 'No-Contact Delivery': return <Truck />;
      case 'Online Ordering': return <Smartphone />;
      default: return <Utensils />;
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="header-brand">
              <div className="header-logo">
                <Utensils />
              </div>
              <div>
                <h1 className="header-title">
                  {restaurantInfo.name} <span className="header-title-accent">| {restaurantInfo.nameHindi}</span>
                </h1>
                <div className="header-rating">
                  <Star />
                  <span className="header-rating-number">{restaurantInfo.rating}</span>
                  <span className="header-rating-count">({restaurantInfo.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            <div className="header-actions">
              <button onClick={handleCall} className="btn-outline-orange">
                <Phone />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title">
              {restaurantInfo.tagline}
            </h2>
            <p className="hero-subtitle">
              Naraingarh's Most Loved Fast Food Destination
            </p>
            <div className="hero-buttons">
              <button onClick={handleWhatsAppOrder} className="btn-primary">
                <MessageCircle />
                Order Online
              </button>
              <button 
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-orange"
              >
                View Menu
              </button>
              <button onClick={handleGetDirections} className="btn-outline-yellow">
                <MapPin />
                Get Directions
              </button>
            </div>
            <div className="hero-info">
              <div className="hero-info-item">
                <Clock />
                <span>{restaurantInfo.timings}</span>
              </div>
              <span className="hero-info-separator">•</span>
              <span>{restaurantInfo.priceRange}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="section-content">
            <h3 className="section-title">About Us</h3>
            <p className="section-text">
              Mazaa Munch is one of the most loved fast food destinations in Naraingarh. 
              Known for delicious taste, friendly service, and a perfect family dining experience, 
              we bring you the authentic flavors of street food with a modern twist. 
              Our commitment to quality and taste has made us a favorite among food lovers in Panchkula.
            </p>
            <div className="lgbtq-badge">
              <span>🏳️‍🌈 LGBTQ+ Friendly Establishment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="menu-section">
        <div className="section-container">
          <div className="section-header">
            <h3 className="section-title">Menu Highlights</h3>
            <p className="section-subtitle">Discover our most popular dishes</p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-image-container">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="menu-card-image"
                  />
                  {item.featured && (
                    <div className="menu-card-badge">
                      Popular
                    </div>
                  )}
                </div>
                <div className="menu-card-content">
                  <h4 className="menu-card-title">{item.name}</h4>
                  <p className="menu-card-description">{item.description}</p>
                  <div className="menu-card-footer">
                    <span className="menu-card-price">{item.price}</span>
                    <button onClick={handleWhatsAppOrder} className="btn-primary" style={{fontSize: '0.875rem', padding: '0.5rem 1rem'}}>
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <h3 className="section-title">Our Services</h3>
            <p className="section-subtitle">Multiple ways to enjoy our delicious food</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {getServiceIcon(service.title)}
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="section-container">
          <div className="reviews-header">
            <h3 className="section-title">What Our Customers Say</h3>
            <div className="rating-display">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={star <= Math.floor(restaurantInfo.rating) ? 'star-filled' : 'star-empty'} 
                />
              ))}
            </div>
            <p className="rating-text">
              {restaurantInfo.rating} out of 5 <span className="rating-count">({restaurantInfo.reviewCount} reviews)</span>
            </p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={star <= review.rating ? 'star-filled' : 'star-empty'} 
                    />
                  ))}
                </div>
                <p className="review-comment">"{review.comment}"</p>
                <div className="review-footer">
                  <span className="review-author">{review.name}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="section-container">
          <div className="location-header">
            <h3 className="section-title">Visit Us</h3>
            <p className="location-address">{restaurantInfo.address}</p>
            <button onClick={handleGetDirections} className="btn-primary" style={{marginTop: '1rem'}}>
              <MapPin />
              Get Directions
            </button>
          </div>
          <div className="location-map-container">
            <iframe
              src={restaurantInfo.mapEmbedUrl}
              className="location-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mazaa Munch Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h3 className="section-title">Get In Touch</h3>
            <p className="section-subtitle">Have questions? We'd love to hear from you!</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div className="contact-item-content">
                  <h4>Phone</h4>
                  <a href={`tel:${restaurantInfo.phone}`} className="contact-phone">
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div className="contact-item-content">
                  <h4>Address</h4>
                  <p className="contact-text">{restaurantInfo.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock />
                </div>
                <div className="contact-item-content">
                  <h4>Hours</h4>
                  <p className="contact-text">{restaurantInfo.timings}</p>
                  <p className="contact-hours-detail">Open Daily</p>
                </div>
              </div>
            </div>
            <div className="contact-form-card">
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="success-title">Message Sent!</h4>
                  <p className="success-message">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="form-input"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows="4"
                      className="form-textarea"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    <Mail />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>{restaurantInfo.name}</h4>
              <p>{restaurantInfo.nameHindi}</p>
              <p>
                Naraingarh's favorite fast food destination serving delicious meals since day one.
              </p>
            </div>
            <div className="footer-section">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#menu">Menu</a></li>
                <li><a href="#" onClick={handleWhatsAppOrder}>Order Online</a></li>
                <li><a href="#" onClick={handleGetDirections}>Directions</a></li>
                <li><span>🏳️‍🌈 LGBTQ+ Friendly</span></li>
              </ul>
            </div>
            <div className="footer-section">
              <h5>Business Hours</h5>
              <p className="footer-hours">{restaurantInfo.timings}</p>
              <p className="footer-hours">Open Daily</p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <Facebook />
                </a>
                <a href="#" className="social-link">
                  <Instagram />
                </a>
                <a href={`https://wa.me/${restaurantInfo.phone}`} className="social-link">
                  <MessageCircle />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 {restaurantInfo.name}. All rights reserved. | {restaurantInfo.website}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppOrder}
        className="whatsapp-float"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle />
      </button>
    </div>
  );
};

export default Home;
