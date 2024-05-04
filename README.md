# MERN-Auth-App-Frontend

### This is the frontend application for a MERN (MongoDB, Express.js, React.js, Node.js) authentication app. It provides a user-friendly interface for users to sign up, verify their email through a verification mail, login, and logout securely.

## Technologies Used

### React: JavaScript library for building user interfaces.
### react-router-dom: React router library for declarative routing.
### react-toastify: Library for displaying toast notifications.
### Material-UI: React component library for building UIs with Material Design.
### Axios: Promise-based HTTP client for making AJAX requests.

## Installation

### Clone this repository: git clone https://github.com/LORD-JINXXX/MERN-Auth-App-Frontend.git
### Navigate to the project directory: cd mern-auth-app-frontend
### Install dependencies: npm install

## Configuration

### Update the backend API endpoint in the .env file with the URL where your backend API is hosted.

## Usage

### Start the development server: npm start
### The application will open in your default web browser.

## Features

### Sign Up: Create a new user account.
### Email Verification: Verify user's email address through a verification email.
### Login: Log in an existing user.
### Logout: Log out the currently logged-in user.

## Folder Structure

src/
|-- api/                   # API utilities and functions
|   |-- apiLogout.js       # Functions for authentication API requests
|-- components/            # Reusable UI components
|   |-- login              # login component folder
|   |-- signup             # signup component folder
|   |-- ...
|-- context/               # Context providers
|   |-- AuthContext.js     # Authentication context provider
|-- pages/                 # Page components
|   |-- Home.js            # Home page component
|-- App.js                 # Main component
|-- index.js               # Entry point
|-- index.css/             # CSS or styling files (if applicable)
|-- urls/                  # urls file

## Contributing

### Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.



