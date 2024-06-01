# Contact Management Application

## Overview

This project is a Contact Management Application built using React, Context API, and React Router. It provides users with functionalities to register, login, create, view, edit, and delete contacts.

## Features

- User authentication (registration and login)
- Create, view, edit, and delete contacts
- User-friendly interface
- Notifications for user actions (using a toast system)

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - Context API
  - Bootstrap (for styling)

- **Backend:**
  - Node.js (Express)
  - MongoDB (or any database you are using)

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine
- MongoDB installed and running (or access to a cloud-based MongoDB instance)

### Clone the Repository

```bash
git clone https://github.com/sampsonnyebuk/contact-management-app.git
cd contact-management-app
Install Dependencies
Navigate to the frontend directory and install dependencies:

bash
Copy code
cd client
yarn install
Navigate to the backend directory and install dependencies:

bash
Copy code
cd server
yarn install
Environment Variables
Create a .env file in the backend directory and add the following variables:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Running the Application
To run the frontend:

bash
Copy code
cd client
yarn start
To run the backend:

bash
Copy code
cd server
yarn start
The frontend will be running on http://localhost:3000 and the backend on http://localhost:8000.

Project Structure
Frontend
src
components: Reusable components (e.g., Layout, Navbar)
context: Context providers for authentication and toast notifications
pages: Different pages of the application (Home, Login, Register, CreateContact, AllContact, EditContact)
App.js: Main application component
index.js: Entry point of the React application
Backend
controllers: Controller functions for different routes
models: Mongoose models
routes: Route definitions
server.js: Entry point of the backend application
Usage
Register
Navigate to http://localhost:3000/register to create a new account.

Login
Navigate to http://localhost:3000/login to log into your account.

Create a Contact
Once logged in, navigate to http://localhost:3000/create to create a new contact.

View Contacts
Navigate to http://localhost:3000/mycontacts to view all your contacts.

Edit a Contact
Click on a contact to navigate to the edit page and update the contact details.

Delete a Contact
Click the delete button next to a contact to remove it from your list.

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name
Make your changes and commit them: git commit -m 'Add some feature'
Push to the branch: git push origin feature-name
Create a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions, feel free to contact me at inyangnyebuk@gmail.com
