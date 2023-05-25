# Multi Store Backend

### This repository contains a backend application developed using NestJS that uses MongoDB as a database and Swagger for documentation.

## Functionality:
### The application provides the following features:

- Getting a list of stores.
- Receipt of goods of a particular store.
- Placement of orders by users.
- Receive the user's order history by email and phone number at the same time.

## Run instructions:
### Follow these steps to run the application:

- Make sure you have Node.js and npm (Node Package Manager) installed.
- Clone this repository on your local machine.
- Change to the root folder of the project.
- Install the dependencies by running npm install.
- Add the necessary environment variables to the .env file, an example of variables is contained in .env.sample.
- Run the application, run npm run start or npm run start:dev for development mode. The list of available commands can be found in the package.json file
- The application will be launched and will be available at http://localhost:PORT. (Where PORT is your port which you specified in .env or 3000 by default)

## API documentation:

### 👉 ❗❗ ATTENTION ❗❗
### The backend uses render.com, and the server goes to sleep after 15 minutes of user inactivity (no requests to the server). And when a new request comes in, the server restarts. But it takes 2-4 minutes.

## [Swagger documentation](https://multi-store-backend.onrender.com/api/docs)

- After running the application, you can access the API documentation using Swagger. Open a web browser and go to http://localhost:PORT/api/docs (Where PORT is the port you specified in .env or 3000 by default) to view available endpoints and API requests.

- Make sure the application is running before accessing the API or viewing the Swagger documentation.
