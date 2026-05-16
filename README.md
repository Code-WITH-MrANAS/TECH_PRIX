"# 🚀 TechPrix - Full Stack Portfolio & Service Platform

A modern, serverless full-stack application for showcasing projects, managing client contacts, and collecting testimonials. Built with React + Vite for the frontend and serverless functions on Vercel for the backend.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Development](#development)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [File Storage](#file-storage)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

TechPrix is a comprehensive platform designed for tech service providers to:
- **Showcase Services**: Display your services with detailed descriptions
- **Portfolio Management**: Highlight completed projects and case studies
- **Client Testimonials**: Collect and display client reviews and ratings
- **Lead Generation**: Capture potential client inquiries through contact forms
- **Professional Presence**: Build your online brand with a modern, responsive website

The application follows a **serverless architecture** for optimal scalability and cost-efficiency, with both frontend and backend deployed on Vercel.

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library with latest features
- **Vite 8** - Next-generation frontend build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **Lucide React** - Modern icon library
- **React Router DOM** - Client-side routing
- **React Helmet Async** - Document head management for SEO

### Backend
- **Node.js 18+** - JavaScript runtime
- **Serverless Functions** - Vercel deployment
- **Express.js 5** - Web framework
- **MongoDB Atlas** - NoSQL database
- **Mongoose** - MongoDB object modeling (through validation)
- **Nodemailer** - Email sending for notifications
- **Express Validator** - Request validation
- **CORS** - Cross-Origin Resource Sharing
- **Helmet** - Security middleware

### DevOps & Tools
- **Vercel** - Deployment platform
- **MongoDB Atlas** - Cloud database
- **Gmail API** - Email notifications
- **ESLint** - Code linting

## 📁 Project Structure

```
TECH_PRIX FINAL/
├── README.md                           # This file
├── deployment-backend/                 # Serverless backend (Vercel)
│   ├── api/                           # Serverless API handlers
│   │   ├── health.js                  # Health check endpoint
│   │   ├── contact/
│   │   │   ├── index.js              # POST & GET contacts
│   │   │   └── [id].js               # Single contact operations
│   │   ├── projects/
│   │   │   ├── index.js              # GET all projects
│   │   │   └── [id].js               # GET single project
│   │   └── reviews/
│   │       ├── index.js              # POST & GET reviews
│   │       └── [id].js               # Single review operations
│   ├── config/
│   │   └── db.js                     # MongoDB connection
│   ├── middleware/
│   │   ├── cors.js                   # CORS configuration
│   │   ├── errorHandler.js           # Global error handling
│   │   └── validate.js               # Request validation middleware
│   ├── models/
│   │   ├── Contact.js                # Contact data schema
│   │   ├── Project.js                # Project data schema
│   │   └── Review.js                 # Review/testimonial schema
│   ├── utils/
│   │   ├── emailService.js           # Email sending utility
│   │   └── fileStorage.js            # File storage management
│   ├── package.json                  # Backend dependencies
│   ├── vercel.json                   # Vercel configuration
│   ├── dev-server.js                 # Local development server
│   └── Documentation files (guides, checklists, etc.)
│
└── frontend-deployment/               # React + Vite frontend
    ├── src/
    │   ├── App.jsx                   # Main application component
    │   ├── main.jsx                  # Vite entry point
    │   ├── App.css                   # Global styles
    │   ├── index.css                 # Base styles
    │   ├── assets/                   # Static assets (images, etc.)
    │   ├── components/               # Reusable React components
    │   │   ├── AboutSection.jsx
    │   │   ├── ContactSection.jsx
    │   │   ├── HeroSection.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── ProjectsSection.jsx
    │   │   ├── ReviewForm.jsx
    │   │   ├── TestimonialsSection.jsx
    │   │   ├── ServicesSection.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Breadcrumbs.jsx
    │   │   ├── ScrollToTop.jsx
    │   │   ├── WhatsAppButton.jsx
    │   │   ├── SEOHead.jsx
    │   │   └── StructuredData.jsx
    │   ├── context/
    │   │   └── ThemeContext.jsx      # Theme management
    │   ├── pages/                    # Page components
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   ├── Services.jsx
    │   │   ├── ServiceDetail.jsx
    │   │   ├── Portfolio.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Careers.jsx
    │   │   ├── FAQ.jsx
    │   │   ├── PrivacyPolicy.jsx
    │   │   └── TermsAndConditions.jsx
    │   └── services/
    │       └── api.js               # API integration layer
    ├── public/
    │   ├── robots.txt               # SEO robots file
    │   └── sitemap.xml              # Sitemap for SEO
    ├── index.html                   # HTML entry point
    ├── package.json                 # Frontend dependencies
    ├── vite.config.js               # Vite configuration
    ├── eslint.config.js             # ESLint configuration
    └── vercel.json                  # Vercel configuration
```

## ✨ Features

### Frontend Features
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark/Light Theme** - Theme context for user preference
- ✅ **SEO Optimized** - Structured data, meta tags, sitemap
- ✅ **Smooth Animations** - Framer Motion animations throughout
- ✅ **Multi-page Application** - React Router for seamless navigation
- ✅ **WhatsApp Integration** - Direct messaging button
- ✅ **Contact Forms** - Submit inquiries and testimonials
- ✅ **Project Portfolio** - Showcase completed work
- ✅ **Service Pages** - Detailed service information
- ✅ **FAQ Section** - Common questions answered

### Backend Features
- ✅ **Serverless Architecture** - Scalable, cost-effective
- ✅ **RESTful API** - Clean, documented endpoints
- ✅ **MongoDB Integration** - Persistent data storage
- ✅ **Email Notifications** - Gmail SMTP for alerts
- ✅ **CORS Enabled** - Secure cross-origin requests
- ✅ **Data Validation** - Express Validator for input validation
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Security** - Helmet for HTTP headers, input sanitization

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Node.js 18+** installed ([download](https://nodejs.org/))
- **npm or yarn** package manager
- **Vercel account** (free at [vercel.com](https://vercel.com))
- **MongoDB Atlas account** (free at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas))
- **Gmail account** for email notifications

### Step 1: Clone or Extract the Project

```bash
cd "TECH_PRIX FINAL"
```

### Step 2: Install Frontend Dependencies

```bash
cd frontend-deployment
npm install
cd ..
```

### Step 3: Install Backend Dependencies

```bash
cd deployment-backend
npm install
cd ..
```

### Step 4: Configure Environment Variables

See [Environment Configuration](#environment-configuration) section below.

## ⚙️ Environment Configuration

### Backend Environment Setup

1. **Navigate to backend directory:**
   ```bash
   cd deployment-backend
   ```

2. **Create `.env.local` file:**
   ```bash
   cp .env.example .env.local
   ```

3. **Fill in your environment variables:**

   ```env
   # MongoDB Connection String
   # Get from: https://mongodb.com/cloud/atlas
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techprix?retryWrites=true&w=majority

   # Gmail App Password (NOT your regular password!)
   # Generate at: https://myaccount.google.com/apppasswords
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-16-char-app-password

   # Admin email to receive contact notifications
   EMAIL_RECEIVER=admin@techprix.com

   # Frontend URLs (comma-separated for CORS)
   FRONTEND_URL=http://localhost:5173,https://yourdomain.com

   # API URL for frontend to use
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

### MongoDB Setup

1. Create a **MongoDB Atlas account** at https://mongodb.com/cloud/atlas
2. Create a new cluster (free tier available)
3. Create a database user with credentials
4. Whitelist your IP address (or 0.0.0.0 for development)
5. Copy the connection string and add to `.env.local`

### Gmail Setup for Emails

1. Enable **2-Factor Authentication** on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your device)
4. Generate a 16-character app password
5. Add this password to `EMAIL_APP_PASSWORD` in `.env.local`

**Note:** Do NOT use your regular Gmail password - use only the app password.

## 💻 Development

### Running Frontend Locally

```bash
cd frontend-deployment
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Running Backend Locally

```bash
cd deployment-backend
npm run dev
```

Backend will be available at `http://localhost:3000`

### Health Check

Test if the backend is running:
```bash
curl http://localhost:3000/api/health
```

### Development Commands

**Frontend:**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

**Backend:**
```bash
npm run dev      # Start development server with local MongoDB
npm run build    # Build (no-op, serverless)
npm run start    # Start production server
```

## 🌐 Deployment

### Deploy to Vercel

#### Backend Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Navigate to backend directory:**
   ```bash
   cd deployment-backend
   ```

4. **Deploy:**
   ```bash
   vercel --prod
   ```

5. **Add environment variables in Vercel dashboard:**
   - Go to Settings → Environment Variables
   - Add all variables from `.env.local`

#### Frontend Deployment

1. **Navigate to frontend directory:**
   ```bash
   cd frontend-deployment
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Update backend API URL:**
   - Add `NEXT_PUBLIC_API_URL` in Vercel environment with your deployed backend URL

### Verify Deployment

- Frontend: https://your-domain.vercel.app
- Backend API: https://your-domain.vercel.app/api/health

**Important:** Update CORS settings in backend if your frontend domain changes.

## 📡 API Documentation

### Base URL
- **Local:** `http://localhost:3000/api`
- **Production:** `https://your-vercel-domain.vercel.app/api`

### Health Check
```
GET /api/health
```
Returns: `{ success: true, message: "API is running" }`

### Contact API

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-234-567-8900",
  "service": "Web Development",
  "message": "I'm interested in your services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact saved successfully",
  "data": { "_id": "...", ... }
}
```

#### Get All Contacts (Admin)
```http
GET /api/contact
```

#### Get Single Contact
```http
GET /api/contact/:id
```

#### Update Contact Status
```http
PATCH /api/contact/:id
Content-Type: application/json

{
  "status": "read"  // Options: new, read, replied, archived
}
```

#### Delete Contact
```http
DELETE /api/contact/:id
```

### Projects API

#### Get All Projects
```http
GET /api/projects?featured=true
```

Query Parameters:
- `featured` (optional): Filter featured projects only

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "title": "Project Name",
      "description": "Project description",
      "image": "image-url",
      "link": "project-url",
      "featured": true
    }
  ]
}
```

#### Get Single Project
```http
GET /api/projects/:id
```

### Reviews API

#### Submit Review
```http
POST /api/reviews
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "company": "Tech Corp",
  "role": "CEO",
  "rating": 5,
  "review": "Excellent work on our project!",
  "service": "Web Development"
}
```

#### Get All Reviews
```http
GET /api/reviews?featured=true
```

#### Get Single Review
```http
GET /api/reviews/:id
```

#### Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

#### Error Format
```json
{
  "success": false,
  "message": "Error message",
  "errors": [ ... ]
}
```

## 📦 File Storage

The application supports file uploads through the storage utility:

- **Configuration:** `deployment-backend/utils/fileStorage.js`
- **Setup:** See [FILE_STORAGE_SETUP.md](deployment-backend/FILE_STORAGE_SETUP.md)
- **Usage:** Contact and review submissions can include file attachments

## 🔧 Troubleshooting

### Frontend Issues

**Problem: Port 5173 already in use**
```bash
# Kill the process or use a different port
npm run dev -- --port 5174
```

**Problem: CORS errors**
- Ensure backend `CORS_ORIGINS` includes frontend URL
- Check browser console for exact CORS error
- Restart both servers after environment changes

**Problem: Blank page or styling issues**
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Backend Issues

**Problem: Cannot connect to MongoDB**
- Verify `MONGODB_URI` is correct
- Check IP whitelist in MongoDB Atlas (use 0.0.0.0 for development)
- Ensure network connection is active

**Problem: Emails not sending**
- Verify `EMAIL_USER` and `EMAIL_APP_PASSWORD` are correct
- Use app password, not regular Gmail password
- Check Gmail account has 2FA enabled
- Verify `EMAIL_RECEIVER` is a valid email

**Problem: Vercel deployment fails**
- Check all environment variables are set in Vercel dashboard
- Verify Node.js version compatibility
- Check `vercel.json` configuration

### General Issues

**Problem: Changes not reflecting**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart development servers
- Check for console errors (F12)

**Problem: Database connection timeout**
- Check MongoDB Atlas cluster is running
- Verify firewall/network connectivity
- Try increasing timeout in `config/db.js`

## 📚 Additional Resources

- [Frontend Deployment Guide](frontend-deployment/DEPLOYMENT.md)
- [Backend Deployment Guide](deployment-backend/DEPLOYMENT_GUIDE.md)
- [File Storage Setup](deployment-backend/FILE_STORAGE_SETUP.md)
- [API Cleanup Guide](deployment-backend/API_CLEANUP_GUIDE.md)
- [Migration Summary](deployment-backend/MIGRATION_SUMMARY.md)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review the documentation files in each directory
3. Check error messages in browser console (F12)
4. Check server logs in terminal

---

**Last Updated:** May 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅" 
