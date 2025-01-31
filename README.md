# Volunteer Matching App - Client

This repository contains the frontend for the Volunteer Matching App, built using **React** and **Bootstrap**. The application allows volunteers to find and apply for projects, and organizations to create and manage volunteer opportunities.

## Prerequisites

Before setting up the project, ensure you have the following installed:
- **Node.js & npm** (latest LTS recommended) - Required to run and manage dependencies.
- **React + Vite** - Vite is used as a fast build tool for the React application.
- **Bootstrap** - Used for styling the user interface.
- **A code editor** (e.g., Visual Studio Code) - Recommended for editing and managing the codebase.

## Project Structure

The project follows a structured approach to separate concerns efficiently:

```
volunteer_matching_app_client/
├── README.md          # Documentation for the project
├── eslint.config.js   # ESLint configuration file
├── index.html         # Main HTML file
├── package.json       # Project metadata and dependencies
├── vite.config.js     # Vite configuration file
├── public/            # Static assets
└── src/               # Source code
    ├── App.jsx        # Root component
    ├── config.js      # Configuration file
    ├── index.css      # Global styles
    ├── main.jsx       # Entry point for React
    ├── assets/        # Static assets like images
    ├── components/    # Reusable UI components
    │   ├── CreateProject.jsx  # Component to create a new project
    │   ├── EditProject.jsx    # Component to edit an existing project
    │   ├── Footer.jsx         # Footer component
    │   ├── Layout.jsx         # Layout wrapper for pages
    │   ├── Navbar.jsx         # Navigation bar component
    │   ├── Profile.jsx        # User profile page
    │   ├── Settings.jsx       # User settings page
    │   └── UserDash.jsx       # Dashboard for users
    └── pages/         # Page components
        ├── About.jsx       # About page
        ├── Contact.jsx     # Contact page
        ├── Dashboard.jsx   # Dashboard page
        ├── Home.jsx        # Home page
        ├── Login.jsx       # Login page
        ├── Services.jsx    # Services page
        └── SignUp.jsx      # Sign-up page
```

## Setup Instructions

To set up and run the frontend application, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/volunteer-matching-app-client.git
   cd volunteer-matching-app-client
   ```

2. **Install Dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Start the Application**

   Start the development server using the command:

   ```bash
   npm run dev
   ```

4. **Access the Application**

   Once the server is running, open your browser and visit:
   
   ```
   http://localhost:3000/
   ```

## Features

- **Volunteer Registration**: Users can create accounts and manage their volunteer applications.
- **Project Management**: Organizations can create, edit, and manage volunteer opportunities.
- **User Dashboard**: Volunteers can track their applications and participation in various projects.
- **Responsive UI**: Built with Bootstrap for a seamless experience across devices.

## Known Issues & Bug Reports

- **Project List Refresh Issue**: When a user applies or cancels a volunteer application, the project list does not update automatically. A manual page refresh is required to reflect the changes.
- **Navigation Issues**: Some users report issues with navigation between the login and sign-up pages. As a temporary workaround, use the navbar links.

## Resources

- **Deployed Frontend**: [Volunteer Matching App - Frontend](https://volunteer-liard.vercel.app/)
- **Deployed Backend**: [Volunteer Matching App - Backend](https://volunteer-matching-app-server.onrender.com/)
- **Demo Video**: [YouTube Video Demo](https://youtu.be/fqeVZi8tRKk)

## Contribution Guidelines

Contributions are welcome! If you want to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your fork (`git push origin feature-name`).
5. Submit a pull request.

---

For any issues, suggestions, or feedback, feel free to open an issue or submit a pull request.
