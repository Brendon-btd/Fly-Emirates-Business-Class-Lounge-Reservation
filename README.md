# Fly-Emirates-Business-Class-Lounge-Reservation

A full-stack web application for booking business class lounge access at airports. Built with React, Node.js, Express, and MongoDB.
# 🌟Features

Elegant Reservation Form - User-friendly interface for booking lounge access
Real-time Validation - All fields validated before submission
Time Slot Selection - Choose from available 3-hour time slots (9 AM - 9 PM)
Guest Management - Book for 1-10 guests
Toast Notifications - Instant feedback on booking status
Responsive Design - Works seamlessly on desktop and mobile devices
Modern UI - Clean, professional design with Tailwind CSS

# 🚀Live-Demo

Frontend: https://fly-emirates-business-class-lounge-lilac.vercel.app/
Backend API: https://fly-emirates-business-class-lounge.onrender.com

# 📋Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn
MongoDB Atlas account
Git

# 🛠️Installation
## 1.Clone-the-repository
bashgit clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
## 2.Backend-Setup
bashcd backend
npm install
##Create a .env file in the backend directory:
MONGODB_URI = "mongodb+srv://brendontafadzwa19_db_user:Royalbiz20@cluster0.xa8swmx.mongodb.net"
PORT=4000
Start the backend server:
bashnpm start
## 3.Frontend-Setup
bashcd frontend
npm install
Update the backendUrl in src/App.jsx:
javascriptexport const backendUrl = 'http://localhost:4000'  // For local development
