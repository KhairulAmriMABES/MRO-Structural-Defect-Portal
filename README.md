# MERN Portal - Hello World

A simple portal application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that displays a "Hello World" message.

## Features

- Modern, animated portal UI
- Full-stack JavaScript application
- RESTful API endpoint
- Responsive design

## Project Structure

```
mern-portal/
├── client/             # React frontend
│   ├── public/         # Static files
│   └── src/            # React source code
└── server/             # Express backend
    ├── .env            # Environment variables
    ├── package.json    # Backend dependencies
    └── server.js       # Express server
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional for this simple example)

### Setup Instructions

1. Clone this repository
2. Install server dependencies:
   ```
   cd mern-portal/server
   npm install
   ```
3. Install client dependencies:
   ```
   cd mern-portal/client
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```
   cd mern-portal/server
   npm start
   ```
   The server will run on http://localhost:5000

2. In a new terminal, start the React frontend:
   ```
   cd mern-portal/client
   npm start
   ```
   The client will run on http://localhost:3000

3. Open your browser and navigate to http://localhost:3000 to see the portal

## Technologies Used

- **Frontend**: React.js, Bootstrap, CSS Animations
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (configured but not actively used in this simple example)
- **HTTP Client**: Axios

## License

MIT
