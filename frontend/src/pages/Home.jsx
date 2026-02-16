import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Utensils, ShoppingBag, Truck, Smartphone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { restaurantInfo, menuItems, services, reviews } from '../mockData';

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
      case 'Dine-In': return <Utensils className="w-8 h-8" />;
      case 'Kerbside Pickup': return <ShoppingBag className="w-8 h-8" />;
      case 'No-Contact Delivery': return <Truck className="w-8 h-8" />;
      case 'Online Ordering': return <Smartphone className="w-8 h-8" />;
      default: return <Utensils className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 transition-all">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {restaurantInfo.name} <span className="text-orange-500">| {restaurantInfo.nameHindi}</span>
                </h1>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{restaurantInfo.rating}</span>
                  <span className="text-gray-600">({restaurantInfo.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button 
                onClick={handleCall}
                variant="outline" 
                className="flex items-center gap-2 border-orange-400 text-orange-600 hover:bg-orange-50"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 opacity-60"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-fade-in">
              {restaurantInfo.tagline}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
              Naraingarh's Most Loved Fast Food Destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button 
                onClick={handleWhatsAppOrder}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order Online
              </Button>
              <Button 
                onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
              >
                View Menu
              </Button>
              <Button 
                onClick={handleGetDirections}
                size="lg" 
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 font-semibold px-8 py-6 text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{restaurantInfo.timings}</span>
              </div>
              <span className="text-2xl">•</span>
              <span className="font-medium">{restaurantInfo.priceRange}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">About Us</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mazaa Munch is one of the most loved fast food destinations in Naraingarh. 
              Known for delicious taste, friendly service, and a perfect family dining experience, 
              we bring you the authentic flavors of street food with a modern twist. 
              Our commitment to quality and taste has made us a favorite among food lovers in Panchkula.
            </p>
            <div className="mt-8 inline-block bg-gradient-to-r from-orange-100 to-yellow-100 px-6 py-3 rounded-full">
              <span className="text-orange-600 font-semibold">🏳️‍🌈 LGBTQ+ Friendly Establishment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Menu Highlights</h3>
            <p className="text-lg text-gray-600">Discover our most popular dishes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-400"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                    <Button 
                      onClick={handleWhatsAppOrder}
                      size="sm" 
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                    >
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h3>
            <p className="text-lg text-gray-600">Multiple ways to enjoy our delicious food</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 text-white rounded-full mb-4 shadow-md">
                  {getServiceIcon(service.title)}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-8 h-8 ${star <= Math.floor(restaurantInfo.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {restaurantInfo.rating} out of 5 <span className="text-gray-600 font-normal text-lg">({restaurantInfo.reviewCount} reviews)</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-gray-900">{review.name}</span>
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Visit Us</h3>
            <p className="text-lg text-gray-600 mb-2">{restaurantInfo.address}</p>
            <Button 
              onClick={handleGetDirections}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white mt-4"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={restaurantInfo.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mazaa Munch Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h3>
            <p className="text-lg text-gray-600">Have questions? We'd love to hear from you!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900">Phone</h4>
                  <a href={`tel:${restaurantInfo.phone}`} className="text-orange-600 hover:underline">
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900">Address</h4>
                  <p className="text-gray-700">{restaurantInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900">Hours</h4>
                  <p className="text-gray-700">{restaurantInfo.timings}</p>
                  <p className="text-sm text-gray-600">Open Daily</p>
                </div>
              </div>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-900">Message</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows="4"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none transition-colors resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-orange-400">{restaurantInfo.name}</h4>
              <p className="text-gray-400 mb-4">{restaurantInfo.nameHindi}</p>
              <p className="text-gray-400">
                Naraingarh's favorite fast food destination serving delicious meals since day one.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-gray-400 hover:text-orange-400 transition-colors">Menu</a></li>
                <li><a href="#" onClick={handleWhatsAppOrder} className="text-gray-400 hover:text-orange-400 transition-colors">Order Online</a></li>
                <li><a href="#" onClick={handleGetDirections} className="text-gray-400 hover:text-orange-400 transition-colors">Directions</a></li>
                <li><span className="text-gray-400">🏳️‍🌈 LGBTQ+ Friendly</span></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4 text-orange-400">Business Hours</h5>
              <p className="text-gray-400 mb-4">{restaurantInfo.timings}</p>
              <p className="text-gray-400 mb-4">Open Daily</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={`https://wa.me/${restaurantInfo.phone}`} className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {restaurantInfo.name}. All rights reserved. | {restaurantInfo.website}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppOrder}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transform hover:scale-110 transition-all animate-bounce-slow"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Home;
