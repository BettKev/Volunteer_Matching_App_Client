# Volunteer Matching App Client

This project sets up a basic Flask server with the following dependencies:
- `React`
- `Bootstrap`

## Prerequisites

Ensure you have the following installed on your system:
- React+Vite
- Bootstrap
- A code editor (e.g., Visual Studio Code)

---

## Project Structure

```
    bettkev-volunteer_matching_app_client/
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
        │   └── User_dash.jsx
        └── pages/
            ├── About.jsx
            ├── Contact.jsx
            ├── Dashboard.jsx
            ├── Home.jsx
            ├── Login.jsx
            ├── Services.jsx
            └── Sign_up.jsx
```
---

## Setup Instructions

1. **Navigate to the `server` Directory**

   ```bash
   cd project/client
   ```

2. **Install Dependencies**

   Use `npm install` to install the required React packages:

   ```bash
   npm install
   ```

3. **Run the Application**

   Ensure you're in the client directory and run the React app:

   ```bash
   npm run dev
   ```

4. **Access the Server**

   Open your browser and navigate to:
   ```
   http://localhost:3000/
   ```
---

5. **Bug report**

    - Reload project list bug when user volunteer cancels/applies for application. Ensure to refresh the page to update the changes on the React DOM
    - Get started call to action bug not loading sign up page use login and sign up link on navbar

## Resources
    Frontend
- [Deployed Frontend](https://volunteer-liard.vercel.app/)
    Backend
- [Deployed Backend](https://volunteer-matching-app-server.onrender.com/)
