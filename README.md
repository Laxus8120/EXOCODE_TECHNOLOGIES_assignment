# Login System

This is a sample project showcasing user authentication and authorization functionality for logging IN.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Project-Structure](#Project-Structure)
- [Technologies](#technologies)
- [Usage](#usage)


## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>

2. Install the dependencies:
    ```
    npm install

    ```
3. Configure the server and database settings in the config folder.

    * Create a `.env` file and set these fields.
        SERVER = 'mongodb://localhost/Auth_Dev'
        PORT  = 3002
        JWT_KEY = krishna

    * And, setup your database  
```js
        const connect  = async () =>{

        await mongoose.connect(SERVER);
        } 
        module.exports  = connect;
```
4. Start the server.

## Features

1. MVC Architecture: The project follows a structured `MVC architecture`, separating concerns and promoting code modularity, maintainability, and scalability.

2. Database Integration: The application seamlessly integrates with MongoDB using `Mongoose`, providing reliable data persistence and retrieval.

3. User Registration: Users can create a new account by providing their email and password, which is securely stored in the database.

4 . User Authentication: Users can sign in to their account using their email and password, with password encryption for `enhanced security`.

5. JSON Web Tokens (JWT): The application utilizes `JWTs` for user authentication, providing a secure and scalable authentication mechanism.

6. Password Encryption: User passwords are securely hashed and encrypted using the bcrypt library, making them resistant to unauthorized access.

7. Database Integration: The application seamlessly integrates with MongoDB using Mongoose, providing reliable data persistence and retrieval.

8. Cookie Management: The application handles cookies for session management, allowing users to stay authenticated across multiple requests.

## Technologies 

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Tokens (JWT)
- Validator
- Cookie Parser

## Project Structure

The project follows an MVC (Model-View-Controller) architecture with the following folder structure:

- `src`: Contains the main project files
  - `config`: Configuration files for server and database
  - `controllers`: Handles the business logic for each route
  - `models`: Defines the data models using Mongoose schemas
  - `repository`: Handles database operations using Mongoose models
  - `routes`: Defines the API routes and routes requests to controllers
  - `services`: Implements the business logic using repository and external libraries
- `index.js`: Entry point of the application

## Usage

*Create a new user:

    *Method: POST
    *Endpoint: /api/v1/users
    *Request body:
        -Email (string, required): User's email address
        -Password (string, required): User's password
    *Response:
        -Success: HTTP 201 Created with the created user data
        -Error: HTTP 500 Internal Server Error with error message

*Sign in as a user:

    *Method: POST
    *Endpoint: /api/v1/users/signin
    *Request body:
        -Email (string, required): User's email address
        -Password (string, required): User's password
    Response:
        -Success: HTTP 200 OK with a success message and a JSON Web Token (JWT)
        -Error: HTTP status code based on the error type (e.g., 400 Bad Request, 500 Internal Server Error)

*Check if a user is authenticated:

    *Method: GET
    *Endpoint: /api/v1/users/authenticated
    *Request headers:
        -x-access-token (string, required): JWT obtained during sign in
    *Response:
        -Success: HTTP 200 OK with a success message and user data
        -Error: HTTP status code based on the error type (e.g., 401 Unauthorized, 500 Internal Server Error)