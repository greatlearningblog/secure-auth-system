# Secure Authentication System with JWT and OAuth

This project demonstrates a secure authentication system built using Node.js, Express.js, MongoDB, and Passport.js. It implements:

- **Local Authentication:** Sign up and login with email and password.
- **OAuth Integration:** Login via Google and GitHub.
- **JWT-Based Sessions:** Secure token-based authentication.
- **Password Hashing:** Passwords are securely hashed using bcrypt.
- **Protected Routes:** Only authenticated users can access sensitive routes.
- **Token Refresh Mechanism:** Refresh JWT tokens without re-authentication.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)


## Overview

This project implements a secure authentication system where users can register and log in using email and password or authenticate via third-party providers (Google and GitHub) using OAuth 2.0. JSON Web Tokens (JWT) are used for session management, and protected routes are accessible only with a valid token.

## Features

- **Local Authentication:** Sign up and login with email and password.
- **OAuth 2.0 Integration:** Login using Google or GitHub.
- **JWT-Based Sessions:** Secure token-based authentication.
- **Password Hashing:** User passwords are hashed with bcrypt.
- **Protected Routes:** Only authenticated users can access protected endpoints.
- **Token Refresh:** Refresh expired tokens without requiring re-login.

## Tech Stack

- **Node.js & Express.js:** Backend server and API framework.
- **MongoDB & Mongoose:** Database for storing user credentials.
- **bcrypt.js:** Secure password hashing.
- **jsonwebtoken (JWT):** Token-based authentication.
- **passport.js & OAuth 2.0:** Social login integration (Google, GitHub).
- **express-session:** Session management for OAuth flows.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/secure-auth-system.git
   cd secure-auth-system

**View Other such Node.js Projects:** https://www.mygreatlearning.com/blog/top-node-js-projects/

View other such [Node.js Projects](https://www.mygreatlearning.com/blog/top-node-js-projects/)

