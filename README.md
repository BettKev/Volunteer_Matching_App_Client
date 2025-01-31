# Volunteer Matching App - Client

This repository contains the frontend for the Volunteer Matching App, built using React and Bootstrap.

## Prerequisites

Ensure you have the following installed:
- **Node.js & npm** (latest LTS recommended)
- **React + Vite**
- **Bootstrap**
- **A code editor** (e.g., Visual Studio Code)

## Project Structure

```
volunteer_matching_app_client/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── config.js
    ├── index.css
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── CreateProject.jsx
    │   ├── EditProject.jsx
    │   ├── Footer.jsx
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── Profile.jsx
    │   ├── Settings.jsx
    │   └── UserDash.jsx
    └── pages/
        ├── About.jsx
        ├── Contact.jsx
        ├── Dashboard.jsx
        ├── Home.jsx
        ├── Login.jsx
        ├── Services.jsx
        └── SignUp.jsx
```

## Setup Instructions

Follow these steps to set up the frontend application:

1. **Navigate to the Project Directory**

   ```bash
   cd project/client
   ```

2. **Install Dependencies**

   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

3. **Start the Application**

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

4. **Access the Application**

   Open your browser and go to:
   
   ```
   http://localhost:3000/
   ```

## Known Issues & Bug Reports

- **Project List Refresh Issue**: When a user applies or cancels a volunteer application, the project list does not update automatically. A page refresh is required to reflect the changes.


## Resources

- **Deployed Frontend**: [Volunteer Matching App - Frontend](https://volunteer-liard.vercel.app/)
- **Deployed Backend**: [Volunteer Matching App - Backend](https://volunteer-matching-app-server.onrender.com/)
- **Demo Video**: [YouTube Video Demo](https://youtu.be/fqeVZi8tRKk)

---

For any issues or contributions, feel free to submit a pull request or open an issue.
