# Mazaa Munch Restaurant Website - Product Requirements Document

## Project Overview
**Project Name:** Mazaa Munch Website  
**Type:** Restaurant Landing Page  
**Tech Stack:** React, FastAPI, MongoDB  
**Date Created:** February 16, 2026  

## Original Problem Statement
Create a modern, responsive, and professional website for a fast food restaurant named Mazaa Munch (मज़ा मंच) located in Naraingarh, Panchkula, Haryana. The website should showcase the restaurant's menu, services, location, and enable easy ordering via phone and WhatsApp.

## Business Details
- **Name:** Mazaa Munch (मज़ा मंच)
- **Category:** Fast Food Restaurant
- **Rating:** 4.4 ⭐ (51 reviews)
- **Price Range:** ₹400–600 per person
- **Address:** Chandigarh Road, near Central Bank, Naraingarh, Panchkula, Haryana 134204
- **Contact:** +91 98963 51428
- **Website:** mazaamunch.in
- **Timings:** 11:00 AM – 11:00 PM (Open Daily)

## User Personas
1. **Local Customers** - Residents of Naraingarh looking for quick, tasty meals
2. **Families** - Groups seeking a comfortable dining experience
3. **Online Orderers** - Customers who prefer delivery or pickup
4. **Travelers** - People passing through Panchkula area

## Core Requirements (Static)

### Functional Requirements
1. Interactive hero section with CTA buttons
2. Menu showcase with 8+ food items and pricing
3. Service highlights (Dine-In, Kerbside Pickup, No-Contact Delivery, Online Ordering)
4. Customer reviews section displaying ratings
5. Interactive Google Maps integration
6. Contact form for inquiries
7. Click-to-call functionality
8. WhatsApp ordering integration
9. Floating WhatsApp button
10. Responsive mobile-first design

### Design Requirements
- Yellow-Orange vibrant color scheme
- Poppins font family
- Smooth animations and transitions
- Shadcn UI components
- Lucide React icons (no emoji icons)
- SEO optimized
- LGBTQ+ friendly branding

## What's Been Implemented (February 16, 2026)

### Phase 1: Frontend with Mock Data ✅
**Status:** Completed  
**Date:** February 16, 2026

### Phase 1.5: CSS Migration ✅
**Status:** Completed  
**Date:** February 16, 2026  
**Change:** Migrated from Tailwind CSS to simple CSS files with className approach

#### Files Created:
1. `/app/frontend/src/mockData.js` - Mock data for menu items, reviews, services, restaurant info
2. `/app/frontend/src/pages/Home.jsx` - Main landing page component (8 sections) - **Uses CSS classes**
3. `/app/frontend/src/pages/Home.css` - **Complete CSS stylesheet with all component styles**
4. `/app/frontend/src/App.js` - Updated routing
5. `/app/frontend/src/index.css` - **Cleaned global styles (no Tailwind directives)**
6. `/app/frontend/src/App.css` - Custom animations

#### Features Implemented:
✅ **Header Section**
   - Restaurant branding with logo
   - 4.4-star rating display
   - Call Now button in header

✅ **Hero Section**
   - Large headline with tagline "Taste the Real Mazaa!"
   - Three CTA buttons: Order Online (WhatsApp), View Menu, Get Directions
   - Business hours and price range display
   - Smooth fade-in animations

✅ **About Us Section**
   - Restaurant description
   - LGBTQ+ friendly badge

✅ **Menu Highlights Section**
   - 8 menu items with high-quality food images
   - Item cards with hover effects
   - Prices and descriptions
   - "Popular" badges on featured items
   - Individual "Order Now" buttons

✅ **Services Section**
   - 4 service cards with lucide-react icons
   - Gradient backgrounds
   - Hover scale animations

✅ **Customer Reviews Section**
   - 4.4 rating visualization with stars
   - 4 customer review cards
   - Customer names and timestamps

✅ **Location Section**
   - Full address display
   - Embedded Google Maps iframe
   - "Get Directions" button

✅ **Contact Section**
   - Contact information (phone, address, hours)
   - Working contact form with success state
   - Form validation

✅ **Footer**
   - Restaurant branding
   - Quick links
   - Business hours
   - Social media icons (Facebook, Instagram, WhatsApp)
   - Copyright information

✅ **Floating WhatsApp Button**
   - Fixed position at bottom-right
   - Green background with bounce animation
   - Direct WhatsApp integration

#### Interactive Features:
- All CTA buttons functional (call, WhatsApp, directions)
- Contact form with local state management
- Smooth scroll navigation
- Hover animations on all interactive elements
- Menu "Order Now" buttons trigger WhatsApp
- Click-to-call phone links

#### Design Implementation:
- Yellow-Orange gradient color scheme (orange-500 to yellow-500)
- Poppins Google Font
- **Simple CSS with semantic class names** (.hero-section, .menu-card, .service-card, etc.)
- Custom animations (fade-in, slide-up, bounce-slow) defined in CSS
- Custom scrollbar styling
- Responsive grid layouts using CSS Grid
- **No Tailwind utility classes** - all styling in dedicated CSS files
- Button styles defined as CSS classes (.btn-primary, .btn-outline-orange, etc.)
- Modular component-based CSS structure

## Technical Architecture

### Frontend Structure
```
/app/frontend/src/
├── pages/
│   └── Home.jsx (main landing page)
├── components/ui/ (shadcn components)
├── mockData.js (restaurant data)
├── App.js (routing)
├── App.css (animations)
└── index.css (global styles)
```

### Data Models (Mock)
```javascript
restaurantInfo: {
  name, nameHindi, tagline, rating, reviewCount,
  priceRange, phone, address, mapCode, timings
}

menuItems: [
  { id, name, description, price, image, featured }
]

services: [
  { id, title, description }
]

reviews: [
  { id, name, rating, comment, date }
]
```

## Prioritized Backlog

### P0 Features (Critical)
✅ Complete frontend with mock data
⬜ Backend API development
⬜ Database integration
⬜ Contact form backend submission
⬜ Admin panel for menu management

### P1 Features (High Priority)
⬜ Online ordering system with cart
⬜ Payment integration
⬜ Order tracking
⬜ Email notifications
⬜ SMS notifications
⬜ Image optimization
⬜ SEO meta tags and schema markup
⬜ Performance optimization

### P2 Features (Nice to Have)
⬜ Table reservation system
⬜ Loyalty program
⬜ User authentication
⬜ Order history
⬜ Menu search and filters
⬜ Multilingual support (Hindi/English toggle)
⬜ Dark mode
⬜ Blog section
⬜ Special offers/promotions section
⬜ Customer photo gallery
⬜ Nutritional information

## Next Action Items

### Immediate Next Steps:
1. **User Review** - User should review the frontend design and provide feedback
2. **Backend Development** - Create API endpoints for:
   - Contact form submission
   - Menu items retrieval
   - Reviews management
3. **Database Schema** - Design MongoDB collections for:
   - Menu items
   - Customer inquiries
   - Reviews
   - Orders (future)
4. **Integration** - Connect frontend to backend APIs
5. **Testing** - End-to-end testing of all features

### Future Enhancements:
1. Implement proper online ordering system
2. Add admin dashboard for menu updates
3. Integrate analytics (Google Analytics)
4. Add live chat support
5. Implement SEO best practices
6. Set up production deployment

## Notes
- Current implementation uses mock data stored in `mockData.js`
- All interactive features (call, WhatsApp, directions) are fully functional
- Contact form currently shows success message but doesn't persist data
- Google Maps uses embedded iframe (may need API key for production)
- Preview service was unavailable during development, but local testing confirms all features work correctly
- External image URLs from Unsplash may need to be replaced with locally hosted images for production

## Success Metrics (To Be Tracked)
- Page load time < 3 seconds
- Mobile responsiveness score > 95
- WhatsApp order conversion rate
- Contact form submission rate
- Google Maps direction clicks
- Average session duration
- Bounce rate < 40%
