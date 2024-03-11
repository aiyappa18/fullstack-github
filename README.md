# GitHub Clone App

GitHub Clone App is a full-stack web application built using React, Express, MongoDB, and Passport.js for authentication. Users can view their GitHub repositories, like other users' profiles, sort repositories based on stars and recency, and see who liked their profiles. Additionally, the app features an "Explore" section where users can view the top 10 repositories for programming languages like Javascript, Typescript,C++,Csharp,Java on GitHub.

## Technologies Used

- **Frontend**:
  - React

- **Backend**:
  - Node.js
  - Express

- **Database**:
  - MongoDB

- **Authentication**:
  - Passport.js

## Installation

1. Clone the repository:
git clone <repository-url>

2. Navigate to the project directory:
   cd github-clone-app
   
3. Install dependencies for both client and server:
cd client
npm install
cd ../server
npm install


4. Set up environment variables:
- Create a `.env` file in the server directory.
- Define environment variables like `MONGODB_URI` for connecting to MongoDB, `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` for GitHub OAuth, etc.

## Usage

1. Start the backend server:
   cd server
   npm start

2. Start the frontend development server:
   cd client
   npm start

3. Access the application in your browser at `http://localhost:3000`.

## Features

- **GitHub Integration**: Users can view their GitHub repositories and other users' profiles.
- **Authentication**: Uses Passport.js for user authentication.
- **Profile Likes**: Users can see who liked their profiles.
- **Sorting Repositories**: Repositories can be sorted based on stars and recency.
- **Explore Section**: Displays the top 10 repositories for each programming language on GitHub.




