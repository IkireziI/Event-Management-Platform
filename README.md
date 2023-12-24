# Event Management Web App

Welcome to the Event Management Web App! This project is a simple web application for managing events. It includes a backend server built with ExpressJS and MongoDB (Mongoose) for data storage, and a frontend client built with ReactJS.

## Getting Started

### Prerequisites

- Node.js and npm: Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/blingyplus/eventMS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd event-management-app
   ```

3. Install dependencies for both the server and client:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

## Server Setup

1. Make sure MongoDB is installed and running on your machine.

2. Configure MongoDB connection:

   - Open `server/server.js`.
   - Update the MongoDB connection string (`mongoose.connect`) if needed.

3. Start the server:

   ```bash
   cd server
   node server.js
   ```

   The server will run on http://127.0.0.1:5000.

## Client Setup

1. Start the client:

   ```bash
   cd client
   npm start
   ```

   The client will run on http://127.0.0.1:3000.

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvements, feel free to fork the repository, fix the issues, and create a pull request.

1. Fork the repository.

2. Create a new branch for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit:

   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
