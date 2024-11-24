# Role-Based Access Control (RBAC) with Vite, React, and Tailwind CSS

## Project Overview

This project demonstrates how to implement **Role-Based Access Control (RBAC)** in a modern web application using **Vite** for fast development, **React** for building the user interface, and **Tailwind CSS** for styling. The application allows two types of users: **Admin** and **User**, each with different access rights to various parts of the application.

- **Admin** can manage users, edit their details, and assign tasks.
- **User** can only view their assigned tasks and cannot modify user information.

## Features

- **Login Page**: Allows users to authenticate by entering an email and password.
- **Role-Based Access**: Admin and User roles are managed with different access controls.
  - **Admin**: Access to the "User Management" page, where they can add, edit, or delete users.
  - **User**: Access to the "Task Allocation" page where they can only view tasks.
- **Protected Routes**: Certain routes are protected based on the user's role (e.g., "User Management" is restricted to Admin users).
- **Task Assignment**: Admins can assign tasks to users.
- **Logout Functionality**: Users can log out of the application, which clears their session.
  
## Technologies Used

- **Vite**: Fast and optimized build tool for modern web projects.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **React Router**: A library for navigating between different components/pages.
- **React Icons**: A library for using icons in React components.

### Steps to Setup the Project Locally

1. **Clone the repository**:
   Open your terminal or command prompt and run the following command to clone the project:

   ```bash
   git clone https://github.com/dineshedi/RoleBasedAccessControl.git
2. **Navigate to the project folder**:
   cd rbac
3. **Install the dependencies**
    npm install Or
     yarn install
4. **Setup Environment Variables**
    Create a .env file in the root directory and add the following environment variables to simulate login credentials for Admin:
     VITE_ADMIN_EMAIL="admin@gmail.com"
     VITE_ADMIN_PASSWORD="12345"
5. **Run the Development Server**
    To start the development server and view the app, run:
     npm run dev


### Usage

1. **Login as Admin:**
  Open the application and log in with the credentials set in .env .
  You will be redirected to the "User Management" page where you can manage users.
2. **Login as User:**
  Log in with any other email and password.
  You will be redirected to the "Task Allocation" page where you can only view your assigned tasks.
3. **Role-Based Access:**
  Only the user with the VITE_ADMIN_EMAIL and VITE_ADMIN_PASSWORD in the .env file can access the "User Management" page.
  Any other user will be redirected to the "Task Allocation" page.
4. **Logout:**
  You can log out of the application by clicking the "Logout" button, which removes the user’s session from local storage and redirects to the login page.


### Explanation of Key Components


**App.js**
This is the main entry point for the application. It sets up the routing using react-router-dom and includes:

A public login route (/).
A protected route for Admin users (/usermanagement).
A route for Users (/taskallocation).

**ProtectedRoute.js**
This component is used to protect certain routes based on the user's role. If the user is not an Admin, they will be redirected to an error page.

**UserManagement.js**
This page is accessible only by Admin users. It displays a list of users and allows the Admin to:

Add new users
Edit existing users
Delete users

**UserOnly.js**
This page is accessible only by regular users. It shows the user’s assigned tasks, but no modification capabilities are allowed.

**Tailwind CSS**
Tailwind CSS is used for styling. The classes are utility-based, which makes it easy to style elements directly in JSX without writing custom CSS.

**login.js**
The login page allows users to authenticate by entering an email and password. The credentials are compared to values stored in environment variables (VITE_ADMIN_EMAIL and VITE_ADMIN_PASSWORD). Depending on the role, users are redirected to their respective pages.


   
