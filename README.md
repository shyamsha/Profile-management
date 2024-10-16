# Profile Management Application

A Profile Management Application built using React, TypeScript, React Router, React Context, and React Hook Form. This application allows users to create, update, and view their profile details, with data persistence using local storage and API integration for data retrieval and updates.

## Features

- **Profile Form Page**: Collect user details (name, email, age) with form validation.
- **Profile Display Page**: Display saved profile details or prompt the user to create one if not found.
- **Routing**: Implemented with React Router for navigating between different pages.
- **Error Handling**: Handle API errors, validation errors, and invalid routes (404 page).
- **Local Storage**: Store and retrieve profile data locally to persist across page refreshes.
- **Context API**: Manage global state for profile data and API status across the app.
- **Environment Variables**: Switch between development and production API URLs.
- **Bonus Features**:
  - Edit Profile: Pre-fill form with existing data for updates.
  - Delete Profile: Option to delete the profile data with a confirmation prompt.
  - Deployment: Can be deployed to a hosting service like vercel or render.

## Tech Stack

- **React**: UI library for building the user interface.
- **TypeScript**: For static typing and type safety.
- **React Hook Form**: For form validation and handling.
- **React Router**: For routing between different pages.
- **Context API**: For global state management.
- **Local Storage**: To store and persist data across page reloads.
- **json-server**: To mock API responses.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14.x or above)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shyamsha/Profile-management.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Mock API responses:

   ```bash
   json-server --watch db.json --port 3030
   ```

   - Run on a separate terminal.
   - This will start the mock API server on port 3030.

- In development mode, the app will use the API URL from the .env file.
- In production mode, the app will use the production API URL from the .env file.
