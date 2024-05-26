
# Coca-Cola Website Project

## Overview

This project is a comprehensive web application for Coca-Cola, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with integration fo cloudinary . The application includes an admin panel and two main front-end and back-end applications. The purpose of this project is to create an engaging and user-friendly website for Coca-Cola, with efficient management tools for administrators.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Features](#features)
6. [License](#license)

## Project Structure

```plaintext
coca-cola-website/
│
├── admin/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── README.md
└── ...
```

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Admin Panel**: React.js
- **State Management**: Redux
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS, Bootstrap

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org/)
- npm 
- MongoDB (https://www.mongodb.com/)
- Cloudinary account

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/coca-cola-website.git
   cd coca-cola-website
   ```

2. **Install dependencies for the backend**

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Install dependencies for the admin panel**

   ```bash
   cd ../admin
   npm install
   ```

## Usage

### Running the Backend

1. **Start MongoDB**

   Make sure MongoDB is running on your system. You can start it using the following command (depending on your installation):

   ```bash
   mongod
   ```

2. **Start the backend server**

   ```bash
   cd backend
   npm start
   ```

### Running the Frontend

1. **Start the frontend application**

   ```bash
   cd frontend
   npm start
   ```

### Running the Admin Panel

1. **Start the admin panel**

   ```bash
   cd admin
   npm start
   ```

### Access the Applications

- **Frontend**: Open your browser and go to `http://localhost:3000`
- **Backend**: The backend server runs on `http://localhost:5000`
- **Admin Panel**: Open your browser and go to `http://localhost:3001`

## Features

- **User Authentication**: Secure login and registration system using JWT.
- **Admin Panel**: Manage website content, users, and view analytics.
- **Product Listings**: Display Coca-Cola products with detailed descriptions.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **API Integration**: Seamless communication between front-end and back-end applications.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

